# Extract and download TeddyPups assets
$pages = @(
  "https://puppy.instabizweb.com/",
  "https://puppy.instabizweb.com/puppies",
  "https://puppy.instabizweb.com/happy-families",
  "https://puppy.instabizweb.com/how-it-works",
  "https://puppy.instabizweb.com/faq",
  "https://puppy.instabizweb.com/gone-home",
  "https://puppy.instabizweb.com/contact"
)

$allUrls = @()

foreach ($page in $pages) {
  Write-Host "Fetching $page"
  try {
    $resp = Invoke-WebRequest -Uri $page -UseBasicParsing -TimeoutSec 15
    $html = $resp.Content
    
    # img src="..." and src='...'
    $imgPattern = 'src\s*=\s*["\x27][^"\x27]+["\x27]'
    $imgMatches = [regex]::Matches($html, $imgPattern)
    foreach ($m in $imgMatches) {
      $val = $m.Value -replace '.*src\s*=\s*["\x27]([^"\x27]+)["\x27].*', '$1'
      if ($val) { $allUrls += $val }
    }
    
    # background-image url(...)
    $bgPattern = 'url\s*\(\s*["\x27]?([^)"\x27]+)["\x27]?\s*\)'
    $bgMatches = [regex]::Matches($html, $bgPattern)
    foreach ($m in $bgMatches) {
      $url = $m.Groups[1].Value.Trim()
      if ($url -match '\.(jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|eot|css|js)$') {
        $allUrls += $url
      }
    }
    
    # next/image url=...
    $nextPattern = 'url=([^"&\s]+)'
    $nextMatches = [regex]::Matches($html, $nextPattern)
    foreach ($m in $nextMatches) {
      $decoded = [Uri]::UnescapeDataString($m.Groups[1].Value)
      if ($decoded -match '\.(jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|eot)$') {
        $allUrls += $decoded
      }
    }
    
    # link href="..."
    $linkPattern = '<link[^>]+href\s*=\s*["\x27]([^"\x27]+)["\x27][^>]*>'
    $linkMatches = [regex]::Matches($html, $linkPattern)
    foreach ($m in $linkMatches) {
      $allUrls += $m.Groups[1].Value
    }
    
  } catch {
    Write-Host "  ERROR: $_"
  }
}

# Deduplicate, filter to puppy domain, resolve relative URLs
$base = "https://puppy.instabizweb.com"
$unique = @()
foreach ($url in $allUrls) {
  $resolved = $url
  if ($url -match '^https?://') { $resolved = $url }
  elseif ($url -match '^/') { $resolved = "$base$url" }
  elseif ($url -match '^//') { $resolved = "https:$url" }
  else { $resolved = "$base/$url" }
  
  if ($resolved -match '^https?://puppy\.instabizweb\.com/' -and $resolved -match '\.(jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|eot|css|js)$') {
    $unique += $resolved
  }
}

$unique = $unique | Sort-Object -Unique
Write-Host "`nFound $($unique.Count) unique asset URLs"

# Save URL list for reference
$unique | Out-File -FilePath "$PSScriptRoot\asset_urls.txt" -Encoding UTF8

# Download each
$downloaded = 0
$failed = @()
foreach ($url in $unique) {
  $relPath = $url -replace '^https?://puppy\.instabizweb\.com/', ''
  $safePath = $relPath -replace '\{.*?\}', '' -replace '\?.*', ''
  $destDir = Split-Path "$PSScriptRoot\..\..\public$($safePath)" -Parent
  $destFile = "$PSScriptRoot\..\..\public$($safePath)"
  
  try {
    if (-not (Test-Path $destDir)) {
      New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    if (-not (Test-Path $destFile)) {
      Invoke-WebRequest -Uri $url -OutFile $destFile -TimeoutSec 15
      $downloaded++
      Write-Host "  OK: $relPath"
    } else {
      Write-Host "  SKIP (exists): $relPath"
    }
  } catch {
    $failed += $relPath
    Write-Host "  FAIL: $relPath"
  }
}

Write-Host "`nDownloaded: $downloaded"
if ($failed.Count -gt 0) {
  Write-Host "`nFailed downloads:"
  $failed | ForEach-Object { Write-Host "  $_" }
  $failed | Out-File -FilePath "$PSScriptRoot\failed_downloads.txt" -Encoding UTF8
}

Write-Host "`nDone!"
