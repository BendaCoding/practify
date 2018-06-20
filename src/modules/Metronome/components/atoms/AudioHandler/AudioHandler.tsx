import * as React from 'react';
import { Howl } from 'howler';

interface IAudioHandlerProps {
  isRunning: boolean;
  bpm: number;
  subdivision: number;
  beatsWithVolume: number[];
  currentBeat: number;
  tick: () => void;
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
    const { isRunning, currentBeat } = this.props;

    if (nextProps.isRunning ===! isRunning) {
      if (nextProps.isRunning) {
        this.timerId = setInterval(
          this.update,
          this.calculateInterval(nextProps.bpm),
        )

        /**
         * trigger initial click
         */
        if (currentBeat === 0) {
          this.update();
        }
      } else {
        clearInterval(this.timerId);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  calculateInterval = (bpm: number) => Math.floor(60000 / bpm)

  playSound = () => {
    const { currentBeat, beatsWithVolume } = this.props;
    
    const beatIndex = currentBeat === 0 ? 0 : currentBeat - 1;
    const volume = beatsWithVolume[beatIndex];    

    if (volume > 0) {
      const sound = this.clickSounds[volume - 1];
      sound.play();
    }
  }

  update = () => {
    this.props.tick();
    this.playSound();
  }

  render() {
    return <div />
  }
};
