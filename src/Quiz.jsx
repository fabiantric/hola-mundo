import { useState } from 'react'

const preguntas = [
  {
    pregunta: '¿Cuál es la capital de Francia?',
    opciones: ['Londres', 'París', 'Berlín', 'Madrid'],
    respuestaCorrecta: 'París',
  },
  {
    pregunta: '¿Cuántos continentes hay en el mundo?',
    opciones: ['5', '6', '7', '8'],
    respuestaCorrecta: '7',
  },
  {
    pregunta: '¿Quién pintó la Mona Lisa?',
    opciones: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'],
    respuestaCorrecta: 'Leonardo da Vinci',
  },
  {
    pregunta: '¿Cuál es el océano más grande?',
    opciones: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Océano Ártico'],
    respuestaCorrecta: 'Océano Pacífico',
  },
  {
    pregunta: '¿Cuál es el animal terrestre más grande?',
    opciones: ['Elefante africano', 'Jirafa', 'Ballena azul', 'Delfín'],
    respuestaCorrecta: 'Elefante africano',
  },
];

export function Quiz() {
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [puntuacion, setPuntuacion] = useState(0);

  const manejarRespuesta = (index, respuestaSeleccionada) => {
    const nuevasRespuestas = respuestas.slice();
    nuevasRespuestas[index] = respuestaSeleccionada;
    setRespuestas(nuevasRespuestas);
  };

  const verificarRespuestas = () => {
    let puntuacion = 0;
    for (let i = 0; i < preguntas.length; i++) {
      if (respuestas[i] === preguntas[i].respuestaCorrecta) {
        puntuacion++;
      }
    }
    setPuntuacion(puntuacion);
  };

  return (
    <div>
      <h1>Test de Conocimientos</h1>
      {preguntas.map((pregunta, index) => (
        <div key={index} className="pregunta">
          <h2>{pregunta.pregunta}</h2>
          <div className="opciones">
            {pregunta.opciones.map((opcion, opcionIndex) => (
              <div key={opcionIndex} className="opcion">
                <input
                  type="radio"
                  id={`opcion-${opcionIndex}`}
                  name={`pregunta-${index}`}
                  value={opcion}
                  checked={respuestas[index] === opcion}
                  onChange={() => manejarRespuesta(index, opcion)}
                />
                <label htmlFor={`opcion-${opcionIndex}`}>{opcion}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={verificarRespuestas}>Verificar Respuestas</button>
      <h3>Tu puntuación: {puntuacion} de {preguntas.length}</h3>
    </div>
  );
}
