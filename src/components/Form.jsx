import { useState } from 'react'
import { info, preguntas } from '../utils/questions'

export default function Form () {
  const [infoTaken, setInfoTaken] = useState(false)
  const [currentQuestion, setcurrentQuestion] = useState(0)
  let interval = preguntas.slice(currentQuestion, currentQuestion + 10)

  const handleClick = (e) => {
    e.preventDefault()
    currentQuestion > 40 
      ? interval = preguntas.slice(49,55)
      : setcurrentQuestion(currentQuestion + 10)
  }

  const handleStart = (e) => {
    e.preventDefault()
    setInfoTaken(true)
  }

  return (
    <form className='flex flex-col items-center pt-4 md:gap-4 w-11/12 md:w-3/4'>
      {infoTaken
        ? <>
          {interval.map((pregunta, index) => (
            <article 
              className='bg-slate-200 flex flex-row items-center justify-between px-2 py-4 w-full min-h-min rounded overflow-hidden shadow-md' 
              key={index}
            >
              <label className='px-4'>{pregunta}</label>
              <article className='flex flex-row items-center px-2 py-4'>
                <input type='radio' value='yes' name={pregunta} for={pregunta} />
                <label className='px-2'>Sí</label>
                <input type='radio' value='no' name={pregunta} for={pregunta}/>
                <label className='px-2'>No</label>
              </article>
            </article>
          ))}
          <button
            type='button'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-3 px-4 rounded-full'
            onClick={handleClick}
          >
            Siguiente bloque de preguntas
          </button>
        </>
        : <>
          {info.map((informacion, index) =>
          <article 
            className='bg-slate-200 flex flex-row items-center justify-between px-2 py-4 w-full min-h-min rounded overflow-hidden shadow-md' 
            key={index}
          >
            <label className='px-4'>{informacion}</label>
            <input 
              required
              type='text'
              className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'
            />
          </article>
          )}
          <button
            type='button'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-3 px-4 rounded-full'
            onClick={handleStart}
          >
            Iniciar bloque de preguntas
          </button>
        </>
      }
    </form>
  )
}