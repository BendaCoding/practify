import * as React from 'react';
import * as S from './styled';
import { Panel, H1, Button } from 'practify/components';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Flex } from 'grid-styled';
import { ISettingsPanelProps } from './SettingsPanel.container';
// import 'rc-slider/assets/index.css';
// Not working .. why?
const SliderWithTooltip = createSliderWithTooltip(Slider);

export class SettingsPanel extends React.PureComponent<ISettingsPanelProps> {

  state = { bpm: this.props.bpm };

  componentDidUpdate(prevProps: any) {
    if (prevProps.bpm !== this.props.bpm) {
      this.setState({ bpm: this.props.bpm })
    }
  }

  bpmAfterChangeHandler = (slider: any) => {
    this.props.setBpm(slider);
  }

  bpmOnChangeHandler = (slider: any) => {
    this.setState({ bpm: slider });
  }

  bpmFormatter = (v: any) => {
    return ` ${v} bpm `;
  }

  render() {
    return (
      <Panel active={this.props.active} onClick={this.props.onClick}>
        <H1>Settings</H1>
        <S.Grid>
          <S.VolumeSlider>
            <S.VolumeLabel>Volume</S.VolumeLabel>
            <Slider min={0} max={100} defaultValue={80} vertical />
          </S.VolumeSlider>
          <S.BpmSlider>
            <SliderWithTooltip tipFormatter={this.bpmFormatter} min={50} max={150} value={this.state.bpm} onAfterChange={this.bpmAfterChangeHandler} onChange={this.bpmOnChangeHandler} />
            <S.Label>{this.state.bpm} Bpm</S.Label>
          </S.BpmSlider>
          <S.SubdivisionSettings>
            <S.Label>Subdivisions</S.Label>
            <Flex flexDirection="row"><Button label="/2" onClick={this.props.halveSubdivision} /><S.Subdivision>{this.props.subdivision}th</S.Subdivision><Button label="*2" onClick={this.props.doubleSubdivision} /></Flex>
          </S.SubdivisionSettings>
        </S.Grid>
      </Panel>
    );
  }
};
