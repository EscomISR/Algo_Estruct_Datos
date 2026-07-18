document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todas las imágenes dentro del contenedor .figura
  const images = document.querySelectorAll(".figura img");

  images.forEach((img) => {
    new Viewer(img, {
      inline: false, // Fuerza la apertura en un modal superpuesto
      navbar: false, // Desactiva la barra inferior de miniaturas
      title: false, // Oculta la visualización del nombre del archivo
      toolbar: {
        zoomIn: 1, // Muestra el botón de acercar
        zoomOut: 1, // Muestra el botón de alejar
        oneToOne: 0, // Muestra el botón de zoom 1:1
        reset: 1, // Muestra el botón para centrar la imagen
        prev: 0, // Oculta navegación a imagen anterior
        play: 0, // Oculta presentación de diapositivas
        next: 0, // Oculta navegación a imagen siguiente
        rotateLeft: 0, // Oculta controles de rotación
        rotateRight: 0,
        flipHorizontal: 0, // Oculta controles de simetría (espejo)
        flipVertical: 0,
      },
      movable: true, // Permite al usuario arrastrar la imagen (panning)
      zoomable: true, // Permite el zoom mediante botones, rueda del ratón y gestos táctiles
      rotatable: false, // Bloquea la lógica interna de rotación
      scalable: false, // Bloquea la lógica interna de inversión de escala
      transition: true, // Mantiene activas las transiciones CSS nativas
    });
  });
});
