# POS Nest Frontend — Interfaz del sistema de punto de venta

Interfaz web del sistema de punto de venta, construida con **Next.js** y **TypeScript**. Consume la API REST de [pos-nest-backend](https://github.com/developer-ortega/pos-nest-backend) (NestJS + PostgreSQL + Cloudinary).

> Proyecto de práctica **en desarrollo**. Este README se actualiza a medida que avanza.

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js (App Router), React, TypeScript |
| Estilos | Tailwind CSS |
| API | [pos-nest-backend](https://github.com/developer-ortega/pos-nest-backend) (REST) |

## Requisitos

- Node.js 22 o superior
- La API [pos-nest-backend](https://github.com/developer-ortega/pos-nest-backend) corriendo en local

## Cómo ejecutarlo

1. Clonar e instalar:
   ```bash
   git clone https://github.com/developer-ortega/pos-nest-frontend.git
   cd pos-nest-frontend
   npm install
   ```

2. Crear el archivo `.env.local` a partir del ejemplo:
   ```bash
   cp .env.example .env.local
   ```

3. Iniciar en modo desarrollo:
   ```bash
   npm run dev
   ```

La aplicación queda en `http://localhost:3000`. Si la API usa el mismo puerto, ejecuta uno de los dos en otro (por ejemplo la API en `4000`) y ajusta `NEXT_PUBLIC_API_URL`.

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | URL base de la API (por ejemplo `http://localhost:4000`) |

> **Nunca subas el `.env.local` ni claves al repositorio.** Solo se versiona `.env.example`.

## Scripts

```bash
npm run dev     # Desarrollo
npm run build   # Build de producción
npm run start   # Ejecuta el build
npm run lint    # Linter
```

## Estado

- [x] Proyecto base con Next.js y TypeScript
- [ ] Conexión con la API
- [ ] Catálogo de productos
- [ ] Carrito y registro de ventas
- [ ] Despliegue

## Autor

**Renato Ortega** · [GitHub](https://github.com/developer-ortega) · [LinkedIn](https://www.linkedin.com/in/renato-ortega-dev/)
