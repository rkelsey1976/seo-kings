# Download Keynsham area page images for local use and optimization.
# Run from project root: .\scripts\download-keynsham-images.ps1
# Waits 10 seconds between requests to avoid Wikimedia rate limits (429).

$ErrorActionPreference = 'Stop'
$base = Join-Path $PSScriptRoot '..'
$outDir = Join-Path $base 'public\images\keynsham'
$ua = 'Mozilla/5.0 (compatible; SEO-Kings/1.0)'

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$images = @(
    @{
        Url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg'
        File = 'keynsham-hero.jpg'
    },
    @{
        Url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/800px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg'
        File = 'keynsham-health-centre.jpg'
    },
    @{
        Url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/63/Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg/800px-Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg'
        File = 'keynsham-railway-station.jpg'
    },
    @{
        Url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Keynsham_Abby_ruins.jpg/800px-Keynsham_Abby_ruins.jpg'
        File = 'keynsham-abbey-ruins.jpg'
    }
)

foreach ($img in $images) {
    $path = Join-Path $outDir $img.File
    if (Test-Path $path) {
        Write-Host "Skip (exists): $($img.File)"
        continue
    }
    Write-Host "Downloading $($img.File) ..."
    try {
        Invoke-WebRequest -Uri $img.Url -OutFile $path -UserAgent $ua -UseBasicParsing
        Write-Host "  OK: $path"
    } catch {
        Write-Warning "  Failed: $_"
    }
    Start-Sleep -Seconds 10
}

Write-Host "Done. Images are in public\images\keynsham. Optimize them (resize/compress) then refresh the Keynsham area page."
