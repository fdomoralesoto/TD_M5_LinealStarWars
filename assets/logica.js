async function obtenerDatosPorURL(url, casillaDesarrollo) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      casillaDesarrollo.querySelector('.nombre').innerText = data.name;
      casillaDesarrollo.querySelector('.estatura').innerText = data.height !== 'unknown' ? `${data.height / 100} mts.` : 'Altura Desconocida';
      casillaDesarrollo.querySelector('.peso').innerText = data.mass !== 'unknown' ? `${data.mass} kgs.` : 'Peso Desconocido';
  
      casillaDesarrollo.style.visibility = 'visible';
      casillaDesarrollo.style.height = 'auto';
      casillaDesarrollo.style.overflow = 'visible';
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  }
  
  function mostrarContenido(event) {
    const indiceInicio = parseInt(event.currentTarget.getAttribute('data-indice'));
    const seccionesDesarrollo = document.querySelectorAll('.desarrollo');
  
    for (let i = 0; i < 5; i++) {
      const casillaDesarrollo = seccionesDesarrollo[indiceInicio + i];
      const url = 'https://swapi.dev/api/people/' + (indiceInicio + i + 1) + '/';
      obtenerDatosPorURL(url, casillaDesarrollo);
    }
  }
  
  const seccionesIntroduccion = document.querySelectorAll('.introduccion-1, .introduccion-2, .introduccion-3');
  seccionesIntroduccion.forEach((seccion) => {
    seccion.addEventListener('click', mostrarContenido);
  });
  