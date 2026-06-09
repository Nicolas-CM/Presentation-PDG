# Registro de Cambios

## Versión 2.0 - Controles Ocultos (Actual)

### 🎯 Cambios Principales
- ✅ **Controles de navegación ocultos por defecto**
- ✅ Los controles aparecen solo al mover el mouse
- ✅ Se ocultan automáticamente después de 3 segundos sin movimiento
- ✅ Hint inicial que indica cómo navegar (desaparece automáticamente)
- ✅ Navegación por teclado siempre activa

### 📝 Detalles Técnicos

#### CSS (`assets/styles.css`)
```css
.nav-controls {
    opacity: 0;              /* Ocultos por defecto */
    pointer-events: none;    /* No interfieren con clicks */
    transition: opacity 0.3s;
}

.nav-controls.visible {
    opacity: 1;
    pointer-events: auto;
}
```

#### JavaScript (`assets/presentation.js`)
- Función `showControls()`: Muestra controles al detectar movimiento del mouse
- Timer automático: Oculta controles después de 3 segundos
- Función `showKeyboardHint()`: Muestra hint inicial por 4.5 segundos
- El hint desaparece al interactuar (click, tecla o movimiento)

### 🎨 Experiencia de Usuario

**Al abrir la presentación:**
1. Aparece un mensaje: "Usa las flechas ← → o mueve el mouse para navegar"
2. El mensaje desaparece después de 4.5 segundos
3. O desaparece inmediatamente al interactuar

**Durante la presentación:**
1. Los controles están ocultos (pantalla limpia)
2. Al mover el mouse → Controles aparecen suavemente
3. Sin movimiento por 3 segundos → Controles se ocultan
4. Las teclas ← → siempre funcionan (sin importar si los controles están visibles)

### ⌨️ Navegación

**Teclado** (siempre activo):
- `←` `→` - Slide anterior/siguiente
- `Espacio` - Siguiente slide
- `PageUp` `PageDown` - Navegar
- `Home` `End` - Primera/última slide
- `F11` - Pantalla completa

**Mouse** (aparecer/ocultar):
- Mover el mouse → Mostrar controles
- Click en ← → → Cambiar slide
- Sin movimiento → Ocultar controles
- Doble click → Pantalla completa

**Táctil**:
- Swipe izquierda/derecha

### 🎯 Ventajas

1. **Presentación más limpia**: Sin controles visibles permanentemente
2. **No distrae**: La atención se enfoca en el contenido
3. **Intuitivo**: Los controles aparecen cuando los necesitas
4. **Profesional**: Perfecto para presentaciones formales
5. **Flexible**: Siempre puedes usar el teclado

---

## Versión 1.0 - Implementación Inicial

### ✅ Características
- Separación de CSS y HTML
- Aplicación de paleta Icesi
- 38 slides con contenido MDS-UPDRS
- Navegación por teclado, mouse y táctil
- Controles visibles permanentemente
- Documentación completa

---

**Universidad Icesi · 2026**
