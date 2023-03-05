import React from 'react'
import Countdown from 'react-countdown'
export default class Clock extends React.Component {
  render() {
    const { refCallback, time } = this.props

    return (
      <Countdown
        // When the component mounts, this will
        // call `refCallback` in the parent component,
        // passing a reference to this `Countdown` component
        ref={refCallback}
        date={Date.now() + time * 60000}
        intervalDelay={3}
        zeroPadTime={2}
        autoStart={false}
        daysInHours
      />
    )
  }
}

export class BossClock extends React.Component {
  clockRef = null

  constructor(props) {
    super(props)
    this.setClockRef = this.setClockRef.bind(this)
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
  }

  start() {
    this.clockRef.start()
  }

  pause() {
    this.clockRef.stop()
  }

  setClockRef(ref) {
    // When the `Clock` (and subsequently `Countdown` mounts
    // this will give us access to the API
    this.clockRef = ref
  }
  render() {
    return (
      <div className='text-white flex'>
        <div className='flex justify-center items-center bg-[#2A384B] p-3'>
          <button onClick={this.start} className=''>
            Start
          </button>
        </div>
        <div className='flex justify-center items-center bg-[#2A384B] p-3'>
          <button onClick={this.pause} className=''>
            Reset
          </button>
        </div>
        <div className='flex justify-center items-center bg-[#2A384B] p-2'>
          <Clock refCallback={this.setClockRef} time={this.props.time} />
        </div>
      </div>
    )
  }
}
