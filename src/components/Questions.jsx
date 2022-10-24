import { useState } from 'react'
import { preguntas } from '../utils/questions'

export default function Questions () {
  const [currentQuestion, setcurrentQuestion] = useState(0)
  let interval = preguntas.slice(currentQuestion, currentQuestion + 10)

  const handleClick = (e) => {
    e.preventDefault()
    currentQuestion > 40 
      ? interval = preguntas.slice(49,55)
      : setcurrentQuestion(currentQuestion + 10)
  }

  return (
    <>
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
  )
}