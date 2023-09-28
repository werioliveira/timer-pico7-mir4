import React from "react";
import Countdown from "react-countdown";
export class BossClock extends React.Component {
  clockRef = null;
  color = true;
  constructor(props) {
    super(props);
    this.setClockRef = this.setClockRef.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
  }
  start() {
    this.clockRef.start();
    this.color = false;
    this.forceUpdate();
  }

  pause() {
    this.clockRef.stop();
  }

  setClockRef(ref) {
    // When the `Clock` (and subsequently `Countdown` mounts
    // this will give us access to the API
    this.clockRef = ref;
  }
  updateContainer() {
    this.clockRef.stop();
    this.color = true;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="text-white flex">
        <div className="flex flex-col items-center" onClick={this.start}>
          <img
            className="object-contain w-9 relative z-40"
            src={`./${this.props.boss}${this.color == true ? "" : 1}.png`}
            alt=""
          />
          <Countdown
            // When the component mounts, this will
            // call `refCallback` in the parent component,
            // passing a reference to this `Countdown` component
            ref={this.setClockRef}
            date={Date.now() + this.props.time * 60000}
            intervalDelay={3}
            zeroPadTime={2}
            autoStart={false}
            daysInHours
            onComplete={() => {
              // do your stuff here
              this.updateContainer();
            }}
          />
        </div>
      </div>
    );
  }
}
