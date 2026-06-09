# 📸 Imágenes Necesarias para la Presentación

## Estado Actual
Los placeholders de imágenes se muestran como cajas con información de lo que debería estar ahí. Esto permite que la presentación funcione sin errores.

## Imágenes Referencias en el HTML

### Portada
- `assets/portada-bg.jpg` - Imagen de fondo (campus/laboratorio Vimov)
- `assets/logo-icesi.png` - Logo Universidad Icesi ✅ (Debe existir)

### Contexto
- `assets/arbol-problema.png` - Diagrama del árbol del problema
- `assets/validacion-fvl.png` - Foto/acta de validación con FVL

### Marco Teórico
- `assets/sistema-coordenadas.png` - Sistema de coordenadas IMU

### Protocolo
- `assets/protocolo-pronacion.png` - Demostración de pronación/supinación
- `assets/protocolo-golpeteo.png` - Demostración de golpeteo de dedos

### Métricas y ML
- `assets/pipeline-diagrama.png` - Diagrama del pipeline de procesamiento
- `assets/baseline-pronacion.png` - Gráficas baseline pronación
- `assets/baseline-golpeteo.png` - Gráficas baseline golpeteo
- `assets/analisis-pronacion.png` - Análisis estadístico pronación
- `assets/analisis-golpeteo.png` - Análisis estadístico golpeteo

### Resultados y Validación
- `assets/confusion-pronacion.png` - **← Este es el que mencionaste**
- `assets/confusion-golpeteo.png` - Matriz de confusión golpeteo
- `assets/roc-pronacion.png` - Curva ROC pronación
- `assets/roc-golpeteo.png` - Curva ROC golpeteo
- `assets/resultados-trl3.png` - Resumen de resultados TRL 3

---

## ¿Por qué no aparece confusion-pronacion?

**Razón**: El archivo `assets/confusion-pronacion.png` no existe en la carpeta.

**Solución**: Debes crear o colocar el archivo en `assets/` con ese nombre exacto.

---

## Cómo Agregr Imágenes

1. **Guarda las imágenes** en la carpeta `assets/`
2. **Asegúrate de que los nombres sean exactos** (incluyendo minúsculas/mayúsculas)
3. **Usa formatos**: PNG, JPG, JPEG, GIF, SVG
4. **Resolución recomendada**:
   - Ancho mínimo: 800px
   - Altura mínima: 400px

---

## Nombres Críticos (Los que están siendo referenciados)

### ✅ Ya Existe
- `assets/logo-icesi.png` - Logo Icesi

### ⚠️ Necesarios para que aparezca el contenido
- `assets/confusion-pronacion.png` ← **Este que mencionaste**
- `assets/confusion-golpeteo.png`
- `assets/roc-pronacion.png`
- `assets/roc-golpeteo.png`
- Y otros listados arriba

---

## Nota Importante

Si una imagen NO existe:
- ✅ El placeholder se muestra de todas formas (no hay error)
- ✅ Se ve una caja con el nombre del archivo esperado
- ✅ La presentación sigue funcionando normalmente
- ⚠️ Pero verás un placeholder en lugar de la imagen real

---

## Pasos para Solucionar

1. **Para confusion-pronacion específicamente**:
   ```
   Crea o descarga la matriz de confusión para pronación
   Guardarla como: assets/confusion-pronacion.png
   ```

2. **Para el resto de imágenes**:
   - Genera/obtén las imágenes necesarias
   - Colócalas en `assets/` con los nombres exactos del listado arriba

3. **Refresca el navegador** después de agregar las imágenes

---

## Ejemplo

Si tienes una imagen de una matriz de confusión guardada como `confusion_matrix.png`:

```
Cambiar nombre de:
   confusion_matrix.png
A:
   confusion-pronacion.png

Colocar en:
   assets/confusion-pronacion.png
```

---

**La presentación funcionará perfectamente sin estas imágenes, pero verás placeholders en lugar de las figuras reales.**
