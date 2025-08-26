const lista = document.getElementById('niveles');
const elementos = lista.querySelectorAll('li');

// Convierte la NodeList a un array para poder usar el método sort()
const selector = Array.from(elementos);

// Función para ordenar los elementos de forma aleatoria
selector.sort(function() {
  return Math.random() - 0.5; // Devuelve un valor entre -0.5 y 0.5
});

// Elimina los elementos existentes de la lista
elementos.forEach(li => li.remove());

// Vuelve a añadir los elementos en el nuevo orden aleatorio
selector.forEach(li => lista.appendChild(li));