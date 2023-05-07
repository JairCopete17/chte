import './index.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import brainLogo from './assets/brain.png'
import QuestionsForm from './components/QuestionsForm'
import WelcomePage from './components/WelcomePage'
import ResultsPage from './components/ResultsPage'

function App() {
  const [start, setStart] = useState(false)
  const [final, setFinal] = useState(false)
  const formData = localStorage.getItem('formData')
  
  const handleStart = (e) => {
    e.preventDefault()
    setStart(true)
  }

  return (
    <div className='font-sans bg-slate-100 text-gray-900 lg:landscape:p-0 md:text-lg'>
      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className='mx-auto max-w-5xl min-h-screen flex flex-col items-center justify-center'
      >
        <header className='w-11/12 md:w-3/4 text-justify flex flex-col items-center pt-4 select-none'>
          <img 
            src={brainLogo}
            alt="CHTE logo"
            className="w-16 h-16"
          />
        </header>
        {final
          ? <ResultsPage formData={formData} />
          : start 
            ? <QuestionsForm setFinal={setFinal} />              
            : <WelcomePage handleStart={handleStart} /> 
        }  
      </motion.main>
    </div>
  )
}

export default App
