import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function AdminDashboard() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    getEntries()
    console.log(entries)
  }, [])

  async function getEntries() {
    let { data, error } = await supabase
    .from('entries')
    .select('nombre, edad, genero, grupo, ac_result, lu_result, es_result, pl_result, te_result, ex_result, tr_result')
    
    if (error) alert(error.message)
    setEntries(data)
  } 

  return (
    <section className='w-11/12 md:w-3/4 text-justify text-gray-500 flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-center text-gray-900 pt-4 md:text-3xl'>
        Panel de administración
      </h1>
      <article className='relative overflow-x-auto shadow-sm pt-4 sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='uppercase text-xs text-gray-700 bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'> Nombre </th>
              <th scope='col' className='px-6 py-3'> Edad </th>
              <th scope='col' className='px-6 py-3'> Genero </th>
              <th scope='col' className='px-6 py-3'> Grupo </th>
              <th scope='col' className='px-6 py-3'> Actitud </th>
              <th scope='col' className='px-6 py-3'> Lugar </th>
              <th scope='col' className='px-6 py-3'> Estado </th>
              <th scope='col' className='px-6 py-3'> Plan </th>
              <th scope='col' className='px-6 py-3'> Técnicas </th>
              <th scope='col' className='px-6 py-3'> Exámenes </th>
              <th scope='col' className='px-6 py-3'> Trabajos</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className='bg-white border-b hover:bg-gray-50'>
                <td 
                  scope='row'
                  key={entry.nombre}
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                >
                  {entry.nombre}
                </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.edad} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.genero} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.grupo} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.ac_result} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.lu_result} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.es_result} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.pl_result} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.te_result} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.ex_result} </td>
                <td key={Math.random()} className='px-6 py-4'> {entry.tr_result} </td>
              </tr>               
            ))}
          </tbody>
        </table>
      </article>
      <footer className='text-sm flex flex-row items-center py-6'>
        <img
          src="https://emojicdn.elk.sh/🥷?style=apple"
          alt="Ninja emoji"
          className="w-5 h-5 mr-3"
        />
        Una página creada por Lambda.
      </footer>
    </section>
  )
}