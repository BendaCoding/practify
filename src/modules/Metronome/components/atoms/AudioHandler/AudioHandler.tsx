import React from 'react';
import { Howl } from 'howler';
import setDynterval from 'dynamic-interval';

interface AudioHandlerProps {
  isRunning: boolean;
  bpm: number;
  subdivision: number;
  beatsWithVolume: number[];
  currentBeat: number;
  tick: () => void;
}

export class AudioHandler extends React.PureComponent<AudioHandlerProps> {

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
    const time = this.calculateInterval( bpm * this.props.subdivision / 4 );
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

  componentWillReceiveProps(nextProps: AudioHandlerProps) {
    const { isRunning, currentBeat, bpm, subdivision } = this.props;

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

    if (nextProps.bpm !== bpm || nextProps.subdivision !== subdivision) {
      this.setState({ time: this.calculateInterval(nextProps.bpm * this.props.subdivision / 4) })
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
