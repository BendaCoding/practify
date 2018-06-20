import * as React from 'react';
import { Howl } from 'howler';
import setDynterval from 'dynamic-interval';

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
    time: 0,
  }

  timerId: any;

  clickSounds = [
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.15,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.35,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 0.55,
    }),
    new Howl({
      src: ['audio/woodblock.mp3'],
      preload: true,
      volume: 1,
    }),
  ];

  setTimer() {
    const { bpm } = this.props;
    const time = this.calculateInterval( bpm );
    this.setState({ time });

    this.timerId = setDynterval( () => {
      this.update();  
      return { wait: this.state.time };
    }, { wait: time });
  }

  clearTimer() {
    if (this.timerId) {
      this.timerId.clear();
    }
  }

  componentDidMount() {
    const { isRunning, bpm, subdivision } = this.props;
    if (isRunning) {
      this.setTimer();
    }
  }

  componentWillReceiveProps(nextProps: IAudioHandlerProps) {
    const { isRunning, currentBeat, bpm } = this.props;

    /**
     * Start stop metronome
     */
    if (nextProps.isRunning ===! isRunning) {
      if (nextProps.isRunning) {
        this.setTimer();

        /* Trigger initial tick */
        if (currentBeat === 0) {
          this.update();
        }
      } else {
        this.clearTimer()
      }
    }

    if (nextProps.bpm !== bpm) {
      this.setState({ time: this.calculateInterval(nextProps.bpm) })
    }
  }

  componentWillUnmount() {
    this.clearTimer();
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
