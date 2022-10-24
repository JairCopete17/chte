import { info } from '../utils/questions'

export default function Information ({ handleStart }) {
  return (
    <>
      <article className='bg-slate-200 flex flex-row items-center justify-between px-2 py-4 w-full min-h-min rounded overflow-hidden shadow-md'>
        <label className='px-4'>{info[0]}</label>
        <input 
          placeholder='Escribe tu nombre aquí'
          type='text'
          className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'
        />
      </article>
      <article className='bg-slate-200 flex flex-row items-center justify-between px-2 py-4 w-full min-h-min rounded overflow-hidden shadow-md'>
        <label className='px-4'>{info[1]}</label>
        <input 
          placeholder='Escribe tu edad aquí'
          type='number'
          className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'
        />
      </article>
      <article className='bg-slate-200 flex flex-row items-center justify-between px-2 py-4 w-full min-h-min rounded overflow-hidden shadow-md'>
        <label className='px-4'>{info[2]}</label>
        <select className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'>
          <option value=''> -Escoge una opción- </option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
        </select>
      </article>
      <article className='bg-slate-200 flex flex-row items-center justify-between px-2 py-4 w-full min-h-min rounded overflow-hidden shadow-md'>
        <label className='px-4'>{info[3]}</label>
        <select className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'>
          <option value=''> -Escoge tu grupo- </option>
          <option value='C1'>Ciencias de la eduacación - Grupo C1</option>
          <option value='C2'>Ciencias de la eduacación - Grupo C2</option>
          <option value='C3'>Ciencias de la eduacación - Grupo C3</option>
        </select>
      </article>
      <button
        type='button'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-3 px-4 rounded-full'
        onClick={handleStart}
      >
        Iniciar bloque de preguntas
      </button>
    </>
  )
}