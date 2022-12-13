import { useState } from 'react'
import brainLogo from './assets/brain.png'
import QuestionsForm from './components/QuestionsForm'
import './index.css'

function App() {
  const [start, setStart] = useState(false)
  
  const handleStart = (e) => {
    e.preventDefault()
    setStart(true)
  }

  return (
    <div className='font-sans bg-slate-100 text-gray-900 lg:landscape:p-0 md:text-lg'>
      <main className='mx-auto max-w-5xl min-h-screen flex flex-col items-center justify-center lg:landscape:p-0'>
        <header className='w-11/12 md:w-3/4 text-justify flex flex-col items-center pt-4 select-none'>
          <img 
            src={brainLogo}
            alt="CHTE logo"
            className="w-16 h-16"
          />
          {start
            ? <></>
            : <h1 className='text-2xl font-bold text-center pt-4 md:text-3xl'>Cuestionario de Hábitos y Técnicas de Estudio</h1>}
        </header>
        {start 
          ? <QuestionsForm />              
          : <section className='w-11/12 md:w-3/4 text-justify text-gray-500 flex flex-col items-center pt-4'>
              <p className='py-2'>
                A continuación encontrarás unas preguntas que se refieren a tu forma de estudiar. Léelas con detenimiento y seleccionando la respuesta que concuerde con tu comportamiento.
              </p>
              <p className='py-2'>
                En caso de duda, contesta SÍ o NO teniendo en cuenta lo que te ocurre con más frecuencia. Recuerda que sólo debes dar una respuesta a cada pregunta.
              </p>
              <p className='py-2'>
                Debes ser sincero y contestar a todas las preguntas, pues estos datos servirán para conocer cuál es tu situación en el estudio personal y mejorar, si es necesario, aquellos aspectos que lo requieran. Si no has comprendido algo puedes preguntarlo ahora.
              </p>
              <button 
                className='bg-blue-600 hover:bg-blue-800 text-white font-bold my-4 py-3 px-4 rounded-full'
                onClick={handleStart}
              >
                Inicia tu cuestionario
              </button>
              <h3 className='text-center text-gray-600 font-bold py-4'>
                No comiences a contestar hasta que te lo indiquen
              </h3> 
              <footer className='text-sm flex flex-row items-center py-6'>
                <img
                  src="https://emojicdn.elk.sh/🥷?style=apple"
                  alt="Ninja emoji"
                  className="w-5 h-5 mr-3"
                />
                Una página creada por Jair Copete.
              </footer>
            </section> 
        }  
      </main>
    </div>
  )
}

export default App
