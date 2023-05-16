import { useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

export default function ProfileBuild({ formData }) {
  let ACscore = 0
  let LUscore = 0
  let ESscore = 0
  let PLscore = 0
  let TEscore = 0
  let EXscore = 0
  let TRscore = 0
  const ACquestionsToCheck = [1, 6, 8, 15, 22, 24, 32, 42, 46, 52]
  const LUquestionsToCheck = [2, 9, 16, 25, 29, 35, 38, 43, 45, 47]
  const ESquestionsToCheck = [3, 11, 18, 26, 33, 53]
  const PLquestionsToCheck = [4, 12, 19, 27, 34, 36, 40, 44, 48, 54]
  const TEquestionsToCheck = [5, 13, 17, 21, 28, 37, 41, 49, 51]
  const EXquestionsToCheck = [7, 14, 23, 31, 55]
  const TRquestionsToCheck = [10, 20, 30, 39, 50, 56]
  const offset = 3
  
  // Extract the formData object the questions and responses
  const questions = Object.keys(JSON.parse(formData))
  const responses = Object.values(JSON.parse(formData))

  // Check each question and add or subtract points from the corresponding score
  ACquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") ACscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[15 + offset]) ACscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[15 + offset]) ACscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[32 + offset]) ACscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[32 + offset]) ACscore++
  })

  LUquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") LUscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[2 + offset]) LUscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[2 + offset]) LUscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[16 + offset]) LUscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[16 + offset]) LUscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[43 + offset]) LUscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[43 + offset]) LUscore++
  })

  ESquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") ESscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[18 + offset]) ESscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[18 + offset]) ESscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[53 + offset]) ESscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[53 + offset]) ESscore++
  })

  PLquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") PLscore++
    if (responses[questionNumber + offset] === "Sí"
      && questions[questionNumber + offset] === questions[40 + offset]) PLscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[40 + offset]) PLscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[48 + offset]) PLscore--  
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[48 + offset]) PLscore++  
  })

  TEquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") TEscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[17 + offset]) TEscore--
    else if (responses[questionNumber + offset] === "No"
      && questions[questionNumber + offset] === questions[17 + offset]) TEscore++
  })

  EXquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") EXscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[55 + offset]) EXscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[55 + offset]) EXscore++
  })

  TRquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") TRscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[39 + offset]) TRscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[39 + offset]) TRscore++
    if (responses[questionNumber + offset] === "Sí" 
      && questions[questionNumber + offset] === questions[50 + offset]) TRscore--
    else if (responses[questionNumber + offset] === "No" 
      && questions[questionNumber + offset] === questions[50 + offset]) TRscore++
  })

  // Create an array of objects with the data to be displayed
  const data = [{
    nombre: responses[0],
    edad: responses[1],
    genero: responses[2],
    grupo: responses[3],
    resultado: [
      {
        title: "AC",
        name: "Actitud general ante el estudio",
        score: (ACscore/ACquestionsToCheck.length)*100,
      },
      {
        title: "LU",
        name: "Lugar de estudio",
        score: (LUscore/LUquestionsToCheck.length)*100,
      },
      {
        title: "ES",
        name: "Estado físico",
        score: (ESscore/ESquestionsToCheck.length)*100,
      },
      {
        title: "PL",
        name: "Plan de trabajo",
        score: (PLscore/PLquestionsToCheck.length)*100,
      },
      {
        title: "TE",
        name: "Técnicas de estudio",
        score: (TEscore/TEquestionsToCheck.length)*100,
      },
      {
        title: "EX",
        name: "Exámenes y ejercicios",
        score: (EXscore/EXquestionsToCheck.length)*100,
      },
      {
        title: "TR",
        name: "Trabajos",
        score: (TRscore/TRquestionsToCheck.length)*100,
      }
    ],
    global: ((ACscore + LUscore + ESscore + PLscore + TEscore + EXscore + TRscore)/56)*100,
  }]

  useEffect(() => {
    async function insertData() {
      const profile = {
        nombre: data[0].nombre,
        edad: data[0].edad,
        genero: data[0].genero,
        grupo: data[0].grupo,
        ac_result: data[0].resultado[0].score,
        lu_result: data[0].resultado[1].score,
        es_result: data[0].resultado[2].score,
        pl_result: data[0].resultado[3].score,
        te_result: data[0].resultado[4].score,
        ex_result: data[0].resultado[5].score,
        tr_result: data[0].resultado[6].score,
        global: data[0].global
      }
  
      let { error } = await supabase.from('entries').insert(profile)
      if (error) alert(error.message)
    }

    insertData()
  }, [])

  return (
    <>
      <p className='py-2'>
        Obtuviste un {data[0].resultado[0].score}% en tu actitud general de actitud (AC), un {data[0].resultado[1].score}% en tu lugar de estudio (LU), un {data[0].resultado[2].score}% en tu estado físico (ES), un {data[0].resultado[3].score}% acerca de tu plan de trabajo (PL), un {data[0].resultado[4].score}% en tus técnicas de estudio (TE), un {data[0].resultado[5].score}% en exámenes y ejercicios (EX) junto a un {data[0].resultado[6].score}% en tus trabajos (TR).
      </p>
      <BarChart
        width={500}
        height={300}
        data={data[0].resultado}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" fill="#f6c0d3" />
      </BarChart>
      {data[0].global >= 90
        ? <p className='py-2 font-semibold text-center'>Tu puntuación global es igual a {data[0].global}%, lo que significa que eres buen estudiante, sigue así.</p>
        : data[0].global >= 50 && data[0].global < 90
          ? <p className='py-2 font-semibold text-center'>Tu puntuación global es igual a {data[0].global}%, lo que significa que eres un estudiante aceptable, puedes mejorar en algun aspecto.</p>
          : data[0].global >= 11 && data[0].global < 50
            ? <p className='py-2 font-semibold text-center'>Tu puntuación global es igual a {data[0].global}%, lo que significa que eres un estudiante con muchos aspectos a mejorar.</p>
            : <p className='py-2 font-semibold text-center'>Tu puntuación global es igual a {data[0].global}%, lo que significa que eres un estudiante que no sabe estudiar.</p>
      }
    </>
  )
}