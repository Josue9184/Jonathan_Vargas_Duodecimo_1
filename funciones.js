window.onload = function () {
  const hora = new Date().toLocaleTimeString();
  alert("Bienvenido. La hora actual es: " + hora);
};

// Validación del formulario
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos del formulario.");
    return false; // Evita el envío
  }

  if (!correo.includes("@")) {
    alert("El correo no parece válido.");
    return false;
  }

  alert("Gracias por contactarnos, " + nombre + ". Pronto te responderemos.");
  return true;
}