# Presentación Vimov — MDS-UPDRS Parte III

Presentación interactiva para el proyecto de grado sobre evaluación motora en enfermedad de Parkinson usando el ecosistema Vimov e IMUs.

## Identidad Visual

La presentación utiliza la **paleta de colores oficial de la Universidad Icesi**:

### Paleta Principal
- **Azul Icesi** - Pantone 2131 C (#5454e9)
- **Blanco** (#ffffff)

### Paleta Complementaria
- **Amarillo Icesi** - Pantone 381 C (#e4eb60)
- **Verde Icesi** - Pantone 2251 C (#4cb979)
- **Morado Icesi** - Pantone 2665 C (#865cf0)
- **Naranja Icesi** - Pantone Orange 21 C (#e9683b)
- **Gris 1** - Pantone 423 C (#88898c)
- **Gris 2** - Pantone 420 C (#cecfd4)

##  Estructura del Proyecto

```
├── index.html              # Contenido de la presentación
├── assets/
│   ├── styles.css         # Estilos CSS separados con paleta Icesi
│   ├── presentation.js    # Lógica de navegación interactiva
│   ├── color-reference.html  # Guía visual de colores
│   ├── logo-icesi.png     # Logo Universidad Icesi
│   └── [imágenes]         # Imágenes adicionales
└── README.md              # Este archivo
```

##  Cómo Usar

1. **Abrir la presentación**: Abre `index.html` en tu navegador web moderno (Chrome, Firefox, Edge)

2. **Ver referencia de colores**: Abre `assets/color-reference.html` para ver una guía visual de todos los colores institucionales

2. **Navegación**:
   - **Teclado**: 
     - `←` / `→` : Slide anterior/siguiente
     - `Espacio` / `PgUp` / `PgDn` : Navegar
     - `Home` / `End` : Primera/última slide
   - **Mouse**: 
     - Los controles aparecen al mover el mouse
     - Se ocultan automáticamente después de 3 segundos
     - Click en los botones ← →
   - **Táctil**: Desliza (swipe) izquierda/derecha

3. **Modo Pantalla Completa**:
   - Presiona `F11` o doble click en cualquier parte
   - Los controles se volverán semi-transparentes y aparecerán al pasar el mouse

##  Contenido de la Presentación

### 38 Slides organizados en 8 secciones:

1. **Portada** - Información del proyecto
2. **Agenda** - Estructura de la presentación
3. **Contexto** - Parkinson y la escala MDS-UPDRS
4. **Marco Teórico** - Fundamentos clínicos y técnicos
5. **Estado del Arte** - Comparativa de soluciones
6. **Objetivos** - General y específicos
7. **Protocolo** - OE1: Estandarización de captura
8. **Métricas y ML** - OE2: Pipeline y clasificador
9. **Módulo Vimov** - OE3: Arquitectura y desarrollo
10. **Validación** - OE4: Resultados TRL 3
11. **Conclusiones** - Resumen y trabajo futuro
12. **Referencias** - Bibliografía científica

##  Equipo

- **Integrantes**: Davide Flamini · Nicolás Cuéllar · Andrés Cabezas
- **Tutora**: Monica María Rojas Rincón, Msc.
- **Facultad**: Barberi de Ingeniería, Diseño y Ciencias Aplicadas
- **Universidad**: Icesi
- **Año**: 2026

## ️ Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (ES6+)
- Tipografía: Plus Jakarta Sans (Google Fonts)
- Responsive design

##  Notas Técnicas

- **Perfil de Color**: Adobe RGB para manejo uniforme
- **Resolución óptima**: 1280×720px (16:9)
- **Navegadores compatibles**: Chrome 90+, Firefox 88+, Edge 90+
- **Impresión**: Optimizada para PDF con page-break

##  Licencia

Universidad Icesi © 2026. Todos los derechos reservados.
