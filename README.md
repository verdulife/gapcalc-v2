# gapcalc-v2

Calculadora de precios para servicios de impresión (papel, plotter, camisetas) con panel de administración protegido.

## Tech Stack

- **Astro 6** (SSR) + **Svelte 5** + **Tailwind CSS 4**
- **Drizzle ORM** + **@libsql/client** (Turso)
- **Netlify** (hosting)
- **Bun** (package manager)

## Configuración

### 1. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
TURSO_DATABASE_URL=libsql://tu-db.turso.io
TURSO_AUTH_TOKEN=tu_token_de_turso
AUTH_PASSWORD=tu_contraseña_segura
```

Puedes usar `.env.example` como referencia.

### 2. Crear base de datos en Turso

```bash
# Crear base de datos
turso db create gapcalc

# Obtener URL
turso db show gapcalc --url

# Crear token de autenticación
turso db tokens create gapcalc
```

### 3. Instalar dependencias

```bash
bun install
```

### 4. Push del schema a Turso

```bash
bun run db:push
```

### 5. Seed de datos iniciales

```bash
bun run db:seed
```

## Comandos

```bash
bun run dev          # Desarrollo local
bun run build        # Build para producción
bun run preview      # Preview del build
bun run db:push      # Push cambios del schema a Turso
bun run db:seed      # Poblar base de datos con datos iniciales
```

## Estructura del proyecto

```
src/
├── db/
│   ├── index.ts      # Conexión a Turso via Drizzle
│   └── schema.ts     # Definición de tablas (papers, plotters, tshirts, prints, vars)
├── lib/
│   ├── db-print.ts   # Helper: datos para calculadora de impresión
│   ├── db-plotter.ts # Helper: datos para calculadora de plotter
│   └── utils.ts      # Utilidades (formateo de precios, portapapeles)
├── components/       # Componentes Svelte (UI de calculadoras y panel de ajustes)
├── pages/
│   ├── index.astro   # Calculadora de impresión
│   ├── plotter.astro # Calculadora de plotter
│   ├── camisetas.astro# Calculadora de camisetas
│   ├── ajustes.astro  # Panel de administración (protegido)
│   ├── login.astro    # Página de login
│   └── api/           # API routes para CRUD
│       ├── papers.ts
│       ├── plotters.ts
│       ├── tshirts.ts
│       ├── prints.ts
│       ├── vars.ts
│       ├── auth.ts
│       └── logout.ts
└── middleware.ts     # Protección de rutas (auth cookie)
```

## Actualizar precios

1. Ve a `/ajustes` (necesitas estar logueado)
2. Modifica los valores de papers, plotters, tshirts o variables
3. Los cambios se guardan automáticamente en Turso

## Seguridad

- La página `/ajustes` está protegida por contraseña
- La contraseña se configura via `AUTH_PASSWORD` en `.env`
- Se usa una cookie `auth` que expira en 24h

## Deployment

El proyecto usa **Netlify** con SSR. Asegúrate de configurar las variables de entorno en el dashboard de Netlify:

- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`
- `AUTH_PASSWORD`

```bash
# Deploy automático al hacer push a main
git push origin main
```

## Migración de datos

Si necesitas modificar el schema de la base de datos:

1. Edita `src/db/schema.ts`
2. Ejecuta `bun run db:push` para aplicar los cambios a Turso
3. Si necesitas migrar datos existentes, crea un script de migración en `scripts/`

## Datos disponibles en Turso

| Tabla | Descripción |
|-------|-------------|
| `papers` | Tipos de papel con precios por unidad |
| `prints` | Tipos de impresión con unidades por hoja |
| `plotters` | Materiales de plotter con ancho y precio por metro |
| `tshirts` | Tamaños de camiseta con precio de impresión |
| `vars` | Variables globales de pricing (corte, urgencia, etc.) |