import { useState } from 'react'
import { motion } from 'framer-motion'
import { questions } from '../utils/questions'

export default function QuestionsForm() {
  const [formData, setFormData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [alertMessage, setAlertMessage] = useState(false)

  // Create an event handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // TODO: Save the form data into a database
  }

  // Create an event handler for the "Next" button
  const handleNext = (e) => {
    e.preventDefault()
    // Get the current question based on the current index
    const currentQuestion = questions[currentIndex]

    // Check if the current question has been answered
    if (!formData[currentQuestion]) {
      // Show an error message or return early if the question has not been answered
      setAlertMessage(true)
      return
    }
    
    // Increment the current question index, unless it's already at the end of the list
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    
    // Stop showing an error message to the user
    setAlertMessage(false)
  }

  // Create an event handler for the "Previous" button
  const handlePrevious = (e) => {
    e.preventDefault()

    // Decrement the current question index, unless it's already at the beginning of the list
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Get the current question based on the current index
  const currentQuestion = questions[currentIndex]

  // Determine the type of input field to display
  let inputField = null
  if (currentQuestion === "¿Cuál es tu nombre?") {
    // Display a text input field for the name question
    inputField = (
      <input
        type="text"
        name={currentQuestion}
        value={formData[currentQuestion] || ""}
        onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
        className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'
        required
      />
    )
  } else if (currentQuestion === "¿Cuál es tu edad?") {
    // Display a number input field for the age question
    inputField = (
      <input
        type="number"
        name={currentQuestion}
        value={formData[currentQuestion] || ""}
        onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
        className='bg-slate-100 border-2 border-gray-300 rounded w-2/3 md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-500'
        required
      />
    )
  } else if (currentQuestion === "¿Cuál es tu genero?") {
    // Display a radio button group for the gender question
    inputField = (
      <article className='flex flex-row pt-4 items-center gap-2'>
        <input
          type="radio"
          value="Hombre"
          name={currentQuestion}
          checked={formData[currentQuestion] === "Hombre"}
          onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
          required
        />
        <p>Hombre</p>
        <input
          type="radio"
          value="Mujer"
          name={currentQuestion}
          checked={formData[currentQuestion] === "Mujer"}
          onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
        />
        <p>Mujer</p>
      </article>
    )
  } else if (currentQuestion === "¿Cuál es tu programa educativo?") {
    // Display a radio button group for the educational program question
    inputField = (
      <section className='flex flex-col pt-4 items-center gap-2'>
        <article className='flex flex-row space-x-4'>
          <input
            type="radio"
            value="C1"
            name={currentQuestion}
            checked={formData[currentQuestion] === "C1"}
            onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
            required
          />
          <p>Ciencias de la educación - Grupo C1</p>
        </article>
        <article className='flex flex-row space-x-4'>
          <input
            type="radio"
            value="C2"
            name={currentQuestion}
            checked={formData[currentQuestion] === "C2"}
            onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
          />
          <p>Ciencias de la educación - Grupo C2</p>
        </article>
        <article className='flex flex-row space-x-4'>
          <input
            type="radio"
            value="C3"
            name={currentQuestion}
            checked={formData[currentQuestion] === "C3"}
            onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
          />
          <p>Ciencias de la educación - Grupo C3</p>
        </article>
      </section>
    )
  } else {
    // Display a radio button group for the next questions
    inputField = (
      <article className='flex flex-row pt-4 items-center gap-2'>
        <input
          type="radio"
          value="Sí"
          name={currentQuestion}
          checked={formData[currentQuestion] === "Sí"}
          onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
          required
        />
        <p>Sí</p>
        <input
          type="radio"
          value="No"
          name={currentQuestion}
          checked={formData[currentQuestion] === "No"}
          onChange={(e) => setFormData({ ...formData, [currentQuestion]: e.target.value })}
        />
        <p>No</p>
      </article>
    )
  }

  return (
    <motion.form
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className='flex flex-col items-center pt-2 md:gap-4 w-11/12 md:w-3/4'
    > 
      {alertMessage && (
        <article 
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
          role="alert"
        >
          <p className='block sm:inline'>Por favor, responda a la pregunta actual antes de continuar.</p>
        </article>
      )}
      <label className='pt-4 text-xl text-center font-bold'>
        {currentQuestion}
      </label>
      {inputField}
      <article className='inline-flex pt-4'>
        {/* Only show the "Anterior" button if the current index is not 0 */}
        {currentIndex > 0 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handlePrevious}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
          >
            Anterior
          </motion.button>
        )}
        {/* Only show the "Siguiente pregunta" button if the current index is not the last question */}
        {currentIndex < questions.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handleNext}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
          >
            Siguiente
          </motion.button>
        )}
        {/* Only show the "Terminar" submit button if the current index is the last question */}
        {currentIndex == questions.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
          >
            Terminar
          </motion.button>
        )}
      </article>
    </motion.form>
  )
}