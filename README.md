# Web Creator Pro

Template base para crear webs profesionales con Claude Code.

## Stack

| Paquete | Versión | Uso |
|---------|---------|-----|
| Next.js | 15 | Framework React (App Router, SSR) |
| TypeScript | 5.8 | Tipado estático |
| Tailwind CSS | 4 | Estilos utility-first |
| motion | 12 | Animaciones React |
| lucide-react | - | Iconos SVG modernos |
| clsx + tailwind-merge | - | Utility `cn()` para clases condicionales |

## Herramientas globales de Claude Code

Estas se activan automáticamente en cualquier proyecto:

| Herramienta | Tipo | Qué hace |
|-------------|------|----------|
| ui-ux-pro-max | Skill | 50+ estilos, 161 paletas, 57 font pairings, UX guidelines |
| design | Skill | Logos, identidad corporativa, banners, iconos |
| design-system | Skill | Tokens de diseño (primitivo → semántico → componente) |
| ui-styling | Skill | shadcn/ui + Tailwind + diseños canvas |
| brand | Skill | Voz de marca, identidad visual, messaging |
| slides | Skill | Presentaciones HTML con Chart.js |
| banner-design | Skill | Banners para redes sociales, ads, web, print |
| Magic MCP | MCP | Componentes UI premium de 21st.dev |

## Uso

### Proyecto nuevo desde cero

```bash
git clone https://github.com/IndoDiego/web-creatos-pro.git mi-proyecto
cd mi-proyecto
rm -rf .git
git init
npm install
npm run dev
```

### Añadir a proyecto existente

```bash
npm install next react react-dom motion lucide-react clsx tailwind-merge
```

## Estructura

```
src/
├── app/
│   ├── globals.css      # Tailwind CSS
│   ├── layout.tsx       # Layout raíz (Inter font)
│   └── page.tsx         # Página principal con animación
└── lib/
    └── utils.ts         # cn() - merge de clases
```

## Scripts

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm run start  # Servir build
npm run lint   # Linter
```
