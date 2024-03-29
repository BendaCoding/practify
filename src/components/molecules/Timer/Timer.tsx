import * as moment from 'moment';
import React from 'react';
import { CircularProgressBar } from '../CircularProgressBar';

export interface TimerProps {
  time: number;
  elapsed: number;
  timerId: number;
  isRunning: boolean;
  onFinish: (...args: any[]) => void;
  onTick?: (...args: any[]) => void;
  onEverySecond?: () => void;
  onClick?: () => void;
  tickInterval?: number;
  size?: number;
  strokeWidth?: number;
}

interface TimerState {
  elapsed: number;
  interval: any;
  isRunning: boolean;
}

export class Timer extends React.Component<TimerProps, TimerState> {

  public static defaultProps: Partial<TimerProps> = {
    tickInterval: 0.01,
    strokeWidth: 14,
    size: 250,
  };

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      elapsed: props.elapsed,
      interval: null,
      isRunning: false,
    };
  }

  startTimer = () => {
    const { tickInterval, onEverySecond } = this.props;
    const interval = setInterval(
      this.tick, tickInterval! * 1000,
    );
    
    this.setState({
      interval,
      isRunning: true,
    });
  }

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      isRunning: false,
    });
  }

  resetTimer = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null, elapsed: 0 });
  }

  tick = () => {
    const { tickInterval, time, onTick, onFinish, onEverySecond } = this.props;
    const { elapsed } = this.state;

    const newElapsed = elapsed + tickInterval!;

    /**
     * Invoke the onTick Callback if set
     */
    if (onTick) {
      onTick();
    }

    /**
     * Invoke the onEverySecond Callback if set and we've stepped a second
     */
    if ( onEverySecond && Math.floor(elapsed) !== Math.floor(newElapsed)) {
      onEverySecond();
    }

    if (newElapsed >= time) {
      // newElapsed = 0;
      this.stopTimer();
      onFinish();
    }

    this.setState({ elapsed: newElapsed });
  }

  componentWillReceiveProps(nextProps: TimerProps) {
    const { isRunning, interval, elapsed } = this.state;
    const { time, timerId } = this.props;
    const nextIsRunning = nextProps.isRunning;

    /**
     * We changed exercises
     */
    if (timerId !== nextProps.timerId) {
      this.setState({
        elapsed: nextProps.elapsed,
      });
    }

    if (isRunning !== nextIsRunning) {
      if (nextIsRunning && !interval) {

        if (elapsed >= time) {
          this.resetTimer();
        }
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  componentWillUnmount() {
    this.resetTimer();
  }

  render() {
    const { time, isRunning, onClick, size, strokeWidth } = this.props;
    const { elapsed } = this.state;

    const seconds = (time - elapsed) + 0.9999;

    let text = `${moment.utc(seconds * 1000).format('m:ss')}`;
    if (text === '0:00') {
      text = '';
    }

    const progress = (elapsed / time * 100);
    const finished = elapsed >= time;

    return (
        <CircularProgressBar
          progress={progress}
          text={text}
          isRunning={isRunning}
          finished={finished}
          onClick={onClick}
          size={size}
          strokeWidth={strokeWidth}
        />
    );
  }
}
