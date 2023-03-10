import { BossClock } from './countdown'

const App = () => {
  return (
    <div className='flex'>
      <img src='./bg.png' alt='' />
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./1.png' alt='' />
          <BossClock time='30' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./2.png' alt='' />
          <BossClock time='30' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./3.png' alt='' />
          <BossClock time='30' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./4.png' alt='' />
          <BossClock time='30' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./5.png' alt='' />
          <BossClock time='60' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./6.png' alt='' />
          <BossClock time='60' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./7.png' alt='' />
          <BossClock time='180' /> <br></br>
        </div>

        <div className='flex flex-row'>
          <img className='object-contain w-44' src='./8.png' alt='' />
          <BossClock time='180' /> <br></br>
        </div>
      </div>
    </div>
  )
}
export default App
