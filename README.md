# StockFlow Web — Phase 3

> Frontend React profesional para StockFlow. Interfaz visual moderna para gestión de inventario.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Descripción

**StockFlow Web** es una interfaz React moderna y responsive que se conecta a la API REST de StockFlow (Spring Boot). Permite gestionar inventario de forma visual e intuitiva.

Características principales:
- ✅ Crear productos con validación
- ✅ Ver lista de productos en tiempo real
- ✅ Alertas visuales de stock bajo
- ✅ Información detallada por producto
- ✅ Interfaz responsive (mobile, tablet, desktop)
- ✅ Estilos modernos con Tailwind CSS
- ✅ Conexión directa a API backend

## 🚀 Características

| Feature | Descripción |
|---|---|
| **Add Products** | Formulario para agregar productos con validación |
| **Real-time List** | Lista actualizada en tiempo real desde la API |
| **Low Stock Alerts** | Alertas visuales para productos con stock bajo |
| **Product Details** | Información completa: cantidad, precio, valor total |
| **Responsive Design** | Funciona perfectamente en cualquier pantalla |
| **Clean UI** | Interfaz moderna con Tailwind CSS |

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 18+ | Framework para UI |
| **Vite** | 5+ | Build tool ultrarrápido |
| **Tailwind CSS** | 4+ | Estilos modernos |
| **JavaScript (ES6+)** | Latest | Lógica de aplicación |
| **Fetch API** | Native | Llamadas HTTP a backend |

## 📦 Requisitos

- **Node.js** v20+ 
- **npm** v10+
- **StockFlow API** corriendo en `http://localhost:8080`

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/stockflow-web.git
cd stockflow-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Verificar configuración

Asegúrate que la API está en `http://localhost:8080`:

```bash
# En otra terminal
cd stockflow-api
mvn spring-boot:run
```

## ▶️ Ejecutar la aplicación

### Desarrollo

```bash
npm run dev
```

Abre: **http://localhost:5173/**

### Build para producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
stockflow-web/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Encabezado con logo
│   │   ├── ProductForm.jsx      # Formulario para agregar
│   │   ├── ProductList.jsx      # Grid de productos
│   │   └── ProductCard.jsx      # Card individual
│   ├── pages/
│   │   └── Dashboard.jsx        # Página principal
│   ├── services/
│   │   └── api.js              # Llamadas HTTP a backend
│   ├── App.jsx                 # Componente raíz
│   ├── App.css                 # Estilos globales
│   ├── index.css               # Tailwind imports
│   └── main.jsx                # Punto de entrada
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔌 Conexión a la API

La aplicación se conecta automáticamente a:

```
http://localhost:8080/api/products
```

Endpoints utilizados:
- `GET /api/products` — Obtener todos
- `POST /api/products` — Crear producto
- `GET /api/products/alerts/low-stock` — Alertas
- `DELETE /api/products/{code}` — Eliminar

## 💻 Cómo Usar

### 1. Agregar un producto

```
1. Completa el formulario con:
   - Nombre: "Coca-Cola"
   - Código: "COCA001"
   - Cantidad: 50
   - Precio: 2.50
   - Stock mínimo: 10

2. Haz click en "➕ Add Product"
3. El producto aparecerá en la lista
```

### 2. Ver alertas de stock bajo

```
- Los productos con stock < stock mínimo
- Se marcan con ⚠️ LOW STOCK en rojo
- Se muestra una alerta en la parte superior
```

### 3. Ver detalles del producto

Cada tarjeta muestra:
- Nombre y código
- Cantidad en stock (rojo si es bajo)
- Precio unitario
- Valor total (cantidad × precio)
- Botones para Delete y Update

## 🎨 Diseño

**Colores:**
- Verde (#1B8B4B) — Primario, header
- Rojo (#DC2626) — Alertas, stock bajo
- Azul (#3B82F6) — Secundario
- Gris — Fondos y texto

**Responsividad:**
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 3 columnas

## 🔄 Flujo de Datos

```
Usuario
  ↓
React Component
  ↓
ProductForm / ProductList
  ↓
api.js (fetch)
  ↓
Spring Boot API (localhost:8080)
  ↓
H2 Database
  ↓
Respuesta JSON
  ↓
setState → Re-render
  ↓
UI Actualizada
```

## 🚨 Solución de Problemas

### Error: "Failed to load products"

**Causa:** API no está corriendo

**Solución:**
```bash
# En otra terminal
cd stockflow-api
mvn spring-boot:run
```

### No se ven estilos de Tailwind

**Causa:** Tailwind no se compiló

**Solución:**
```bash
npm install
npm run dev
```

### CORS error

**Causa:** API no tiene CORS habilitado

**Solución:** Verifica que `ProductoController.java` tenga:
```java
@CrossOrigin(origins = "*")
```

## 📊 Performance

- ⚡ Build ultrarrápido con Vite
- 🎯 Componentes optimizados
- 📱 Responsive y mobile-first
- 🔄 Actualización en tiempo real

## 📚 Aprendizajes

Conceptos React practicados:
- ✅ Componentes funcionales
- ✅ Hooks (useState, useEffect)
- ✅ Fetch API
- ✅ Manejo de estados
- ✅ Renderizado condicional
- ✅ Listas y keys
- ✅ Event handling
- ✅ Formularios controlados

## 🗺️ Roadmap

| Feature | Estado | Descripción |
|---|---|---|
| CRUD básico | ✅ Completo | Crear, leer, eliminar |
| Update stock | 🔄 En desarrollo | Actualizar cantidades |
| Reports | ⏳ Próximo | Gráficos de inventario |
| Search | ⏳ Próximo | Búsqueda de productos |
| Dark mode | ⏳ Próximo | Tema oscuro |

## 👨‍💻 Autor

**Edison Monsalve Mesa**
- Email: edisonmonsalve21@gmail.com
- Teléfono: +57 314 563 40 68
- GitHub: [github.com/edisonmonsalve](https://github.com)
- LinkedIn: [linkedin.com/in/edisonmonsalve](https://linkedin.com)

Tecnólogo en Análisis y Desarrollo de Software — SENA

## 📝 Licencia

MIT License - Libre para usar, modificar y distribuir.

## 🤝 Contribuciones

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/mejora`
3. Commit: `git commit -m "Añade mejora"`
4. Push: `git push origin feature/mejora`
5. Pull Request

## 📞 Soporte

- 📧 Email: edisonmonsalve21@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com)
- 💬 Discussions: [GitHub Discussions](https://github.com)

---

**Made with ❤️ by Edison Monsalve | June 2026**

⭐ Si te fue útil, deja una star en GitHub!

## 🔗 Links Relacionados

- [StockFlow Console](https://github.com/edisonmonsalve/stockflow) — Phase 1
- [StockFlow API](https://github.com/edisonmonsalve/stockflow-api) — Phase 2
- [SENA](https://www.sena.edu.co) — Institución educativa
