import React, { Component, Fragment } from 'react';
import * as S from './styled';
import { range } from 'lodash';

interface ICountInProps {
  onFinish: () => void;
  beatCount?: number;
  interval?: number;
}

interface IStateProps {
  slowCountIn: boolean;
  finishTimerId: any;
}

const MINIMUM_TIMEOUT = 4000;

export class CountIn extends Component<ICountInProps, any> {
 
  public static defaultProps: Partial<ICountInProps> = {
    beatCount: 4,
    interval: 800,
  };

  constructor(props: ICountInProps) {
    super(props);
    this.state = {
      slowCountIn: false,
    }
  }
  
  componentDidMount() {
    const beatsCount = this.props.beatCount as number;
    const interval = this.props.interval as number;

    let timeout = beatsCount * interval;

    if (timeout < MINIMUM_TIMEOUT) {
      timeout *= 2;
      this.setState({ slowCountIn: true });
    }

    const finishTimerId = setTimeout(() => {
      this.props.onFinish();
    }, timeout);

    this.setState({ finishTimerId })
  }

  componentWillUnmount() {
    clearTimeout(this.state.finishTimerId);
  }

  renderCountNumbers() {
    const { beatCount } = this.props;
    const { slowCountIn } = this.state;
    const interval = this.props.interval as number;

    if (!slowCountIn) {
      return range(0, beatCount).map((nr) => (
        <S.CountNumber
          period={interval}
          delay={interval * nr}
          key={nr}>
          {nr + 1}
        </S.CountNumber>
      ))
    } else {
      return (
        <Fragment>
          {range(0, 2).map((nr) => (
            <S.CountNumber
              period={interval}
              delay={interval * 2 * nr}
              key={nr}>
              {nr + 1}
            </S.CountNumber>
          ))}

          {range(0, beatCount).map((nr) => (
          <S.CountNumber
            period={interval}
            delay={interval * nr + (interval * 4)}
            key={nr + 4}>
            {nr + 1}
          </S.CountNumber>
          ))}
        </Fragment>
      )
    } 
  }

  render() {
    return (
      <S.Wrapper>
        {this.renderCountNumbers()}
      </S.Wrapper>
    );
  }
}
