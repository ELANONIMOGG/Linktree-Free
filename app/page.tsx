'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define tus redes sociales aquí
  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/miguel-zamudio-dev/',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
      ),
      color: 'bg-blue-700',
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/ELANONIMOGG',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'bg-gray-800',
    },
    {
      id: 3,
      name: 'Twitter/X',
      url: 'https://x.com/ElAnonimo_gg',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.694-5.867 6.694h-3.306l7.73-8.835L.85 2.25h6.52l4.881 6.348L17.1 2.25h.144zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      ),
      color: 'bg-black',
    },
    {
      id: 4,
      name: 'Instagram',
      url: 'https://www.instagram.com/zamudio_dev/',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500',
    },
    {
      id: 5,
      name: 'Email',
      url: 'miguelzamudioolsin@gmai.com',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: 'bg-orange-500',
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header con animación */}
        <div className="text-center mb-12 animate-fadeInUp">
          {/* Avatar */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-blue-500 to-purple-600 rounded-full opacity-75 animate-glow"></div>
              <img 
                src="https://github.com/ELANONIMOGG.png" 
                alt="Mi foto de perfil" 
                className="w-full h-full rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            ¡Hola Mundo! 👋
          </h1>
          <p className="text-xl text-blue-200 mb-2 font-semibold">Lider AWS Student Builder UJAT</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Conecta conmigo en mis redes sociales para seguir mi viaje en tecnología y AWS.
          </p>
        </div>

        {/* Botones de redes sociales */}
        <div className="space-y-4 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{
                animation: mounted ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : 'none',
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative px-6 py-4 bg-slate-900/80 backdrop-blur-xl rounded-lg flex items-center justify-between hover:bg-slate-800 transition-all duration-300 border border-white/10 group-hover:border-orange-400/50">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <span className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">
                    {link.name}
                  </span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-6">
          <p>Construido con ❤️ por AWS Student Builders UJAT</p>
          <p className="mt-2 text-gray-500">
            Desplegado en <span className="text-white font-semibold">Vercel</span>
          </p>
        </div>
      </div>

      {/* Efecto de fondo animado */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </main>
  );
}
