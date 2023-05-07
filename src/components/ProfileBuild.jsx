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
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[15 + offset]) ACscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[15 + offset]) ACscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[32 + offset]) ACscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[32 + offset]) ACscore++
  })

  LUquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") LUscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[2 + offset]) LUscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[2 + offset]) LUscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[16 + offset]) LUscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[16 + offset]) LUscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[43 + offset]) LUscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[43 + offset]) LUscore++
  })

  ESquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") ESscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[18 + offset]) ESscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[18 + offset]) ESscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[18 + offset]) ESscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[53 + offset]) ESscore++
  })

  PLquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") PLscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[40 + offset]) PLscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[40 + offset]) PLscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[48 + offset]) PLscore--  
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[48 + offset]) PLscore++  
  })

  TEquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") TEscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[17 + offset]) TEscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[17 + offset]) TEscore++
  })

  EXquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") EXscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[55 + offset]) EXscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[55 + offset]) EXscore++
  })

  TRquestionsToCheck.forEach(questionNumber => {
    if (responses[questionNumber + offset] === "Sí") TRscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[39 + offset]) TRscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[39 + offset]) TRscore++
    else if (responses[questionNumber + offset] === "Sí" && responses[questionNumber + offset] === responses[50 + offset]) TRscore--
    else if (responses[questionNumber + offset] === "No" && responses[questionNumber + offset] === responses[50 + offset]) TRscore++
  })

  // Create an array of objects with the data to be displayed
  const data = [{
    nombre: questions[0],
    edad: questions[1],
    genero: questions[2],
    grupo: questions[3],
    resultado: [
      {
        title: "AC",
        name: "Actitud general ante el estudio",
        score: Math.round((ACscore / ACquestionsToCheck.length)*100 * 100) / 100,
      },
      {
        title: "LU",
        name: "Lugar de estudio",
        score: Math.round((LUscore / LUquestionsToCheck.length)*100 * 100) / 100,
      },
      {
        title: "ES",
        name: "Estado físico",
        score: Math.round((ESscore / ESquestionsToCheck.length)*100 * 100) / 100,
      },
      {
        title: "PL",
        name: "Plan de trabajo",
        score: Math.round((PLscore / PLquestionsToCheck.length)*100 * 100) / 100,
      },
      {
        title: "TE",
        name: "Técnicas de estudio",
        score: Math.round((TEscore / TEquestionsToCheck.length)*100 * 100) / 100,
      },
      {
        title: "EX",
        name: "Exámenes y ejercicios",
        score: Math.round((EXscore / EXquestionsToCheck.length)*100 * 100) / 100,
      },
      {
        title: "TR",
        name: "Trabajos",
        score: Math.round((TRscore / TRquestionsToCheck.length)*100 * 100) / 100,
      }
    ]
  }]

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
    </>
  )
}