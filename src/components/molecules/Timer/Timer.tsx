import * as moment from 'moment';
import * as React from 'react';
import { CircularProgressBar } from '../CircularProgressBar';

export interface ITimerProps {
  time: number;
  isRunning: boolean;
  onFinish: (...args: any[]) => void;
  onTick?: (...args: any[]) => void;
  onClick?: () => void;
  tickInterval?: number;
  size?:number;
  strokeWidth?:number;

}

interface ITimerState {
  elapsed: number;
  interval: any;
  isRunning: boolean;
}

export class Timer extends React.Component<ITimerProps, ITimerState> {

  public static defaultProps: Partial<ITimerProps> = {
    tickInterval: 0.01,
    strokeWidth:14,
    size:250,
  };

  constructor(props: ITimerProps) {
    super(props);
    this.state = {
      elapsed: 0,
      interval: null,
      isRunning: false,
    };
  }

  startTimer = () => {
    const { tickInterval } = this.props;
    const interval = setInterval(
      this.tick, tickInterval! * 1000,
    );
    this.setState({ interval, isRunning: true });
  }

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null, isRunning: false });
  }

  resetTimer = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null, elapsed: 0 });
  }

  tick = () => {
    const { tickInterval, time, onTick, onFinish } = this.props;
    const { elapsed } = this.state;

    let newElapsed = elapsed + tickInterval!;

    if (newElapsed >= time) {
      this.stopTimer();
      newElapsed = time;

      onFinish();
    }

    if (onTick) {
      onTick();
    }

    this.setState({ elapsed: newElapsed });
  }

  componentWillReceiveProps(nextProps: ITimerProps) {
    const { isRunning, interval, elapsed } = this.state;
    const { time } = this.props;
    const nextIsRunning = nextProps.isRunning;

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
