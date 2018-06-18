import * as React from 'react';
import { Howl } from 'howler';

interface IAudioHandlerProps {
  isRunning: boolean;
  bpm: number;
  subdivision: number;
}

export class AudioHandler extends React.PureComponent<IAudioHandlerProps> {
  
  state = {
    qNote: 1,
    subNote: 1,
  }

  timerId: any;

  clickSounds = [
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 1,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.66,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.33,
    }),
  ];

  componentDidMount() {
    const { isRunning, bpm, subdivision } = this.props;
    if (isRunning) {
      this.timerId = setInterval(
        this.update,
        this.calculateInterval(bpm, subdivision),
      )
    }
  }

  componentWillReceiveProps(nextProps: IAudioHandlerProps) {
    if (nextProps.isRunning ===! this.props.isRunning) {
      if (nextProps.isRunning) {
        this.timerId = setInterval(
          this.update,
          this.calculateInterval(nextProps.bpm, nextProps.subdivision),
        )
      } else {
        clearInterval(this.timerId);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  calculateInterval = (bpm: number, subdivision: number) => Math.floor(60000 / (bpm * subdivision))

  update = () => {
    const { subdivision } = this.props;
    
    this.clickSounds[0].play();
  }

  render() {
    return <div />
  }
};
