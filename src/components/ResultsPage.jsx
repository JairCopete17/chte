import ProfileBuild from './ProfileBuild'

export default function ResultsPage({ formData }) {
  return (
    <section className='w-11/12 md:w-3/4 text-justify text-gray-500 flex flex-col items-center pt-4'>
      <p className='py-2'>
        Gracias por contestar el cuestionario. Aquí puedes observar la interpretación individual de tus hábitos y técnicas de estudio.
      </p>
      <ProfileBuild formData={formData} />
      <p className='py-2'>
        Si tienes alguna duda, puedes contactar con tu instructor.
      </p>
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