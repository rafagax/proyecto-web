# Script para eliminar páginas en español no utilizadas
# Ejecutar en PowerShell DESPUÉS de cerrar VS Code

Write-Host "🔍 Eliminando páginas en español no utilizadas..." -ForegroundColor Cyan
Write-Host ""

$filesToDelete = @(
    "src/pages/Analitica.jsx",
    "src/pages/AutomatizacionIA.jsx",
    "src/pages/CasosExito.jsx",
    "src/pages/Contacto.jsx",
    "src/pages/DesarrolloWeb.jsx",
    "src/pages/Nosotros.jsx",
    "src/pages/Seo.jsx"
)

$deleted = 0
$failed = 0

foreach ($file in $filesToDelete) {
    $fullPath = Join-Path (Get-Location) $file

    if (Test-Path $fullPath) {
        try {
            Remove-Item $fullPath -Force
            Write-Host "✓ Eliminado: $file" -ForegroundColor Green
            $deleted++
        }
        catch {
            Write-Host "✗ Error: $file - $_" -ForegroundColor Red
            $failed++
        }
    }
    else {
        Write-Host "✓ Ya no existe: $file" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "Resumen:" -ForegroundColor Cyan
Write-Host "  ✓ Eliminados: $deleted" -ForegroundColor Green
Write-Host "  ✗ Errores: $failed" -ForegroundColor Red
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Mostrar páginas restantes
Write-Host "📋 Páginas en /src/pages/ que quedan:" -ForegroundColor Cyan
Get-ChildItem "src/pages/*.jsx" | Select-Object -ExpandProperty Name | Sort-Object

Write-Host ""
Write-Host "✅ Limpieza completada!" -ForegroundColor Green
