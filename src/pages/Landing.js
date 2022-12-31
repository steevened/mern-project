import main from '../assets/images/main.svg'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <main className='w-5/6 mx-auto px-10 h-full min-h-screen relative '>
      <Logo />
      <div className='flex items-center justify-center gap-7 flex-col md:flex-row absolute -translate-y-1/2 top-1/2'>
        {/* info */}
        <div className=' h-full flex-1'>
          <h1 className='text-4xl font-bold my-5'>
            Jobs <span className='text-teal-500'>Tracking</span> App
          </h1>
          <p className='text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
            fuga ducimus modi minus ut provident dolorum quia ab, minima
            accusantium deserunt quo perferendis velit ipsam explicabo sed, qui
            quibusdam!
          </p>
          <button className='px-4 bg-teal-500 py-1 text-white rounded-md mt-5 shadow-md shadow-slate-400'>
            Login/Register
          </button>
        </div>
        <div className='hidden  md:block flex-1'>
          <img src={main} alt='' />
        </div>
      </div>
    </main>
  )
}

export default Landing
