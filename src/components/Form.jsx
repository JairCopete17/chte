import { useState } from 'react'
import Information from './Information'
import Questions from './Questions'

export default function Form () {
  const [infoTaken, setInfoTaken] = useState(false)
  
  const handleStart = (e) => {
    e.preventDefault()
    setInfoTaken(true)
  }

  return (
    <form className='flex flex-col items-center pt-4 md:gap-4 w-11/12 md:w-3/4'>
      {infoTaken
        ? <Questions />
        : <Information handleStart={handleStart} />
      }
    </form>
  )
}