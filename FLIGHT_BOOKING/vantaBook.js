document.addEventListener("DOMContentLoaded", function () {
  VANTA.WAVES({
      el: "#book", // Ensure the effect applies to the background, not the form
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xa5c81, // ✅ Original color restored
      shininess: 100.00,
      waveHeight: 18.50
  });
});
