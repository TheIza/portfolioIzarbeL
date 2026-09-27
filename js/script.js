// ==========================================================
//  FILTRO DE PROYECTOS
//  Muestra u oculta las tarjetas de proyecto según el botón
//  de filtro en el que se haga clic.
// ==========================================================

const botonesFiltro = document.querySelectorAll('.filtros button');
const tarjetasProyecto = document.querySelectorAll('.tarjeta-proyecto');
const cantidadProyectos = document.querySelector('#cantidad-proyectos');

function actualizarCantidad() {
  const visibles = [...tarjetasProyecto].filter(
    (tarjeta) => !tarjeta.classList.contains('oculto')
  );

  cantidadProyectos.textContent = visibles.length;
}

function aplicarFiltro(filtro) {
  tarjetasProyecto.forEach((tarjeta) => {
    const coincide =
      filtro === 'todos' || tarjeta.dataset.categoria === filtro;

    tarjeta.classList.toggle('oculto', !coincide);
  });

  actualizarCantidad();
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {

    // Actualiza el estado visual y de accesibilidad de los botones
    botonesFiltro.forEach((btn) => {
      btn.classList.remove('activo');
      btn.setAttribute('aria-pressed', 'false');
    });

    boton.classList.add('activo');
    boton.setAttribute('aria-pressed', 'true');

    aplicarFiltro(boton.dataset.filtro);
  });
});

actualizarCantidad();


// ==========================================================
//  CAMBIO DE TEMA
//  Guarda el tema elegido para mantenerlo al cambiar de idioma.
// ==========================================================

const botonTema = document.querySelector('#boton-tema');

// Carga el tema guardado
if (localStorage.getItem('tema') === 'claro') {
  document.body.classList.add('tema-claro');
  botonTema.textContent = '🌙 Oscuro';
  botonTema.setAttribute('aria-label', 'Cambiar a tema oscuro');
}

botonTema.addEventListener('click', () => {
  document.body.classList.toggle('tema-claro');

  if (document.body.classList.contains('tema-claro')) {
    localStorage.setItem('tema', 'claro');
    botonTema.textContent = '🌙 Oscuro';
    botonTema.setAttribute('aria-label', 'Cambiar a tema oscuro');
  } else {
    localStorage.setItem('tema', 'oscuro');
    botonTema.textContent = '☀️ Claro';
    botonTema.setAttribute('aria-label', 'Cambiar a tema claro');
  }
});


// ==========================================================
//  CAMBIO DE IDIOMA
//  Cambia de página al seleccionar otro idioma.
// ==========================================================

const selectorIdioma = document.querySelector("#selector-idioma");

selectorIdioma.addEventListener("change", () => {
  window.location.href = selectorIdioma.value;
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const elementosInteractivos = document.querySelectorAll(
  'a, button, select'
);

elementosInteractivos.forEach((elemento) => {
  elemento.addEventListener('mouseenter', () => {
    cursor.classList.add('grande');
  });

  elemento.addEventListener('mouseleave', () => {
    cursor.classList.remove('grande');
  });
});