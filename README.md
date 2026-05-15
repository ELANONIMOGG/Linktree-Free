# Mi Hub de Redes Sociales 🌐

Una página moderna y bonita para compartir todas tus redes sociales, con el estilo visual de AWS Student Builder Groups.

## Características ✨

- 🎨 **Diseño moderno** con Tailwind CSS
- 💙 **Estilo AWS Student Builder Groups** con colores azules y naranjas
- 🚀 **Optimizado para Vercel** - Despliega en segundos
- 📱 **Completamente responsivo** - Se ve bien en todos los dispositivos
- ✨ **Animaciones suaves** y fluidas
- 🔗 **Fácil de personalizar** - Cambia tus links en minutos
- 🎯 **SEO optimizado**

## Tecnologías 🛠️

- **Next.js 14** - Framework React moderno
- **TypeScript** - Seguridad de tipos
- **Tailwind CSS** - Estilos responsivos
- **React 18** - Últimas características de React

## Instalación 📦

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

## Desarrollo 🚀

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización 🎯

### Cambiar tus redes sociales

Abre el archivo `app/page.tsx` y busca el array `socialLinks`. Reemplaza los URLs y los nombres:

```typescript
const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/TU_USUARIO',
    // ...
  },
  // ...
];
```

### Cambiar el nombre y descripción

En el mismo archivo, actualiza:
- El título en `<h1>`
- La descripción en `<p>`
- El email en el link de Email

### Cambiar los colores

Edita el archivo `tailwind.config.js` para cambiar los colores principales.

## Despliegue en Vercel 🚀

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz click en "New Project"
4. Selecciona tu repositorio
5. Click en "Deploy"

¡Listo! Tu sitio estará en vivo en segundos.

## Compilar para producción 📦

```bash
npm run build
npm start
```

## Licencia 📄

Este proyecto está disponible bajo la licencia MIT.

---

Hecho con ❤️ para AWS Student Builders UJAT
