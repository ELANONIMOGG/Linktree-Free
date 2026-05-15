# 🚀 Guía de Despliegue en Vercel

## Paso a Paso

### 1. Preparar tu código en GitHub

```bash
# Inicializar el repositorio git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Inicial: Mi página de redes sociales"

# Crear un repositorio en GitHub (https://github.com/new)
# Luego ejecutar:
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

### 2. Desplegar en Vercel

**Opción A: Mediante el sitio web de Vercel (Recomendado)**

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up" y crea una cuenta con tu GitHub
3. Autoriza Vercel a acceder a tu GitHub
4. Haz clic en "New Project"
5. Selecciona el repositorio que acabas de crear
6. Configura:
   - Framework: **Next.js**
   - Build Command: **npm run build**
   - Install Command: **npm install**
7. Haz clic en "Deploy"

¡Listo! Tu sitio estará en vivo en `tuproject.vercel.app`

**Opción B: Con Vercel CLI**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## Pasos para Personalizar Antes de Desplegar

### 1. Cambia tu información

Edita `app/page.tsx`:

```typescript
// Busca esta sección
const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/TU_USUARIO', // ← CAMBIA ESTO
    // ...
  },
  // ...
];
```

### 2. Cambia tu nombre

En el mismo archivo, busca:

```typescript
<h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
  ¡Hola! 👋  {/* ← Puedes cambiar esto */}
</h1>
```

### 3. Cambia la descripción

```typescript
<p className="text-gray-300 text-lg leading-relaxed">
  Conecta conmigo en mis redes sociales para seguir mi viaje en tecnología y AWS.
  {/* ↑ Cambia esto por tu descripción */}
</p>
```

## Recursos Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

## Solucionar Problemas

### Error: "Command failed with exit code 1"
- Asegúrate de que `npm install` funcionó correctamente
- Verifica que todos los archivos estén en la carpeta correcta

### El sitio se ve diferente en Vercel
- Limpia el caché del navegador (Ctrl+Shift+Del)
- Espera unos segundos a que se cargue completamente

### Quiero cambiar el dominio
En Vercel Dashboard → Settings → Domains, puedes agregar tu dominio personalizado

---

¡Contáctame si tienes dudas! 🎉
