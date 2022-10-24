import brainLogo from './assets/brain.png'
import './index.css'

function App() {
  return (
    <div className='font-sans bg-slate-100 text-gray-900 lg:landscape:p-0 md:text-lg'>
      <main className='mx-auto max-w-5xl min-h-screen flex flex-col items-center justify-center lg:landscape:p-0'>
        <header className='w-11/12 md:w-3/4 text-justify flex flex-col items-center py-4 select-none'>
          <img 
            src={brainLogo}
            alt="CHTE logo"
            className="w-16 h-16"
          />
          <h1 className='text-2xl font-bold text-center py-4 md:text-3xl'>Cuestionario de Hábitos y Técnicas de Estudio</h1>
          <p className='text-gray-500 py-2'>
            A continuación encontrarás unas preguntas que se refieren a tu forma de estudiar. Léelas con detenimiento y seleccionando la respuesta que concuerde con tu comportamiento.
          </p>
        </header>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full'>
          Inicia tu cuestionario
        </button>
        <section className='w-11/12 md:w-3/4 text-justify flex flex-col items-center py-4 select-none'>
          <p className='text-gray-500 py-2'>
            En caso de duda, contesta SÍ o NO teniendo en cuenta lo que te ocurre con más frecuencia. Recuerda que sólo debes dar una respuesta a cada pregunta.
          </p>
          <p className='text-gray-500 py-2'>
            Debes ser sincero y contestar a todas las preguntas, pues estos datos servirán para conocer cuál es tu situación en el estudio personal y mejorar, si es necesario, aquellos aspectos que lo requieran. Si no has comprendido algo puedes preguntarlo ahora.
          </p>
          <h3 className='text-center text-gray-600 py-4'>
            NO COMIENCES A CONTESTAR HASTA QUE TE LO INDIQUEN
          </h3>
        </section>
      </main>
    </div>
  )
}

export default App
