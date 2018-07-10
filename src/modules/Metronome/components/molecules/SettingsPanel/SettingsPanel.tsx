import * as React from 'react';
import * as S from './styled';
import { Panel, H1 } from 'practify/components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const SettingsPanel: React.SFC<any> = props => {
  return (
    <Panel {...props}>
      <H1>Settings</H1>
      <S.Grid>
      <S.VolumeSlider>
        <S.VolumeLabel>Volume</S.VolumeLabel>
        <Slider min={0} max={100} defaultValue={80} vertical />
      </S.VolumeSlider>
      <S.BpmSlider>
        <Slider min={100} max={130} defaultValue={120} />
        <S.BpmLabel>Bpm</S.BpmLabel>
      </S.BpmSlider>
      </S.Grid>
    </Panel>
  );
};
