# 🧹 Cleanup Instructions - Delete Spanish Files

## Páginas a Eliminar (No se usan)

Las siguientes páginas están en español y **NO se utilizan** en el proyecto:

```
❌ src/pages/Analitica.jsx
❌ src/pages/AutomatizacionIA.jsx
❌ src/pages/CasosExito.jsx
❌ src/pages/Contacto.jsx          (Duplicado de Contact.jsx)
❌ src/pages/DesarrolloWeb.jsx
❌ src/pages/Nosotros.jsx
❌ src/pages/Seo.jsx
```

## ✅ Páginas que MANTENER (Se usan)

```
✅ src/pages/Home.jsx              ← Main landing page
✅ src/pages/Services.jsx          ← All services
✅ src/pages/ServiceDetail.jsx     ← Service details
✅ src/pages/Pricing.jsx           ← Pricing page
✅ src/pages/Contact.jsx           ← Contact form
✅ src/pages/FAQs.jsx              ← FAQ page
✅ src/pages/Blog.jsx              ← Blog articles
✅ src/pages/OurClients.jsx        ← Testimonials
```

---

## 🚀 Cómo Eliminar los Archivos

### **Opción 1: Usar el Script Automático (Recomendado)**

1. **Cierra completamente VS Code**
2. Abre PowerShell en el directorio del proyecto
3. Ejecuta:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force
   .\DELETE_SPANISH_FILES.ps1
   ```

### **Opción 2: Manual en VS Code**

1. En VS Code, abre la carpeta `src/pages/`
2. Haz clic derecho en cada archivo de la lista ❌
3. Selecciona "Delete" (Eliminar)
4. Confirma la eliminación

### **Opción 3: Terminal/PowerShell Manual**

```powershell
cd c:\Users\Georgina\Documents\GitHub\proyecto-web\src\pages

# Eliminar uno por uno
Remove-Item "Analitica.jsx" -Force
Remove-Item "AutomatizacionIA.jsx" -Force
Remove-Item "CasosExito.jsx" -Force
Remove-Item "Contacto.jsx" -Force
Remove-Item "DesarrolloWeb.jsx" -Force
Remove-Item "Nosotros.jsx" -Force
Remove-Item "Seo.jsx" -Force

# Verificar que se eliminaron
Get-ChildItem *.jsx | Select-Object Name | Sort-Object
```

---

## ✨ Resultado Final

Después de eliminar, tu carpeta `/src/pages/` debería verse así:

```
src/pages/
├── Blog.jsx              ✅
├── Contact.jsx           ✅
├── FAQs.jsx              ✅
├── Home.jsx              ✅
├── OurClients.jsx        ✅
├── Pricing.jsx           ✅
├── ServiceDetail.jsx     ✅
└── Services.jsx          ✅

Total: 8 páginas (todas en inglés)
```

---

## 📝 Verificación

Para confirmar que el proyecto sigue funcionando correctamente después de la limpieza:

```bash
npm run dev
```

- ✅ Home carga sin errores
- ✅ Navigation funciona
- ✅ Todos los links funcionan
- ✅ Sin errores en la consola

---

## 🔄 Git Commit (Opcional)

Después de eliminar los archivos, puedes hacer un commit:

```bash
git add -A
git commit -m "Remove unused Spanish pages - keep only English content"
```

---

**Status**: Ready for cleanup
**Time to complete**: 2-3 minutes
