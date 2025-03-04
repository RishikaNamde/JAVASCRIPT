document.addEventListener("DOMContentLoaded", function () {
    VANTA.FOG({
        el: "#vanta-bg", // Applies the fog effect behind content
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x308cb1, 
        midtoneColor: 0x044f90, // Fixed incorrect hex
        lowlightColor: 0xffffff, 
        baseColor: 0xdbdbdb
    });
});
