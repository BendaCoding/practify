import * as React from 'react';
import { Howl } from 'howler';

interface IAudioHandlerProps {
  isRunning: boolean;
  bpm: number;
  subdivision: number;
  beatsWithVolume: number[];
}

export class AudioHandler extends React.PureComponent<IAudioHandlerProps> {
  
  state = {
    currentBeat: 1,
  }

  timerId: any;

  clickSounds = [
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.33,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.66,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 1,
    }),
  ];

  componentDidMount() {
    const { isRunning, bpm, subdivision } = this.props;
    if (isRunning) {
      this.timerId = setInterval(
        this.update,
        this.calculateInterval(bpm),
      )
    }
  }

  componentWillReceiveProps(nextProps: IAudioHandlerProps) {
    if (nextProps.isRunning ===! this.props.isRunning) {
      if (nextProps.isRunning) {
        this.timerId = setInterval(
          this.update,
          this.calculateInterval(nextProps.bpm),
        )
      } else {
        clearInterval(this.timerId);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // calculateInterval = (bpm: number, subdivision: number) => Math.floor(60000 / (bpm * subdivision))
  calculateInterval = (bpm: number) => Math.floor(60000 / bpm)

  update = () => {
    const { beatsWithVolume } = this.props;
    const { currentBeat } = this.state;

    const volume = beatsWithVolume[currentBeat - 1];
    
    if (volume > 0) {
      const sound = this.clickSounds[volume - 1];
      sound.play();
    }
    
    const nextBeat = currentBeat < beatsWithVolume.length
      ? currentBeat + 1
      : 1;

    this.setState({ currentBeat: nextBeat })
  }

  render() {
    return <div />
  }
};
