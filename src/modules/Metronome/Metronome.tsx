import * as React from 'react';
import { Beat, SubdivisionIndicator } from './components';
import { AudioHandler } from './components/atoms/AudioHandler';
import { Button } from 'practify/components';
import { Flex, Box } from 'grid-styled';
import * as S from './styled';
import { IMetronomeProps } from './Metronome.container';
import { SettingsPanel } from './components/molecules/SettingsPanel';

export class Metronome extends React.PureComponent<IMetronomeProps> {

  state = {
    settingsPanel: false,
  }
  toggleSettingsPanel = () => {
    this.setState({settingsPanel: !this.state.settingsPanel});
  }

  removeLastBeat = () => {
    this.props.removeBeat(this.props.beatCount - 1);
  }

  setBpmHandler = (add: number) => () => {
    this.props.setBpm(this.props.bpm + add);
  }
  render() {
  return (
    <div className="my-5">

      <AudioHandler
        isRunning={this.props.isRunning}
        bpm={this.props.bpm}
        subdivision={1}
        beatsWithVolume={this.props.beatsWithVolume}
        currentBeat={this.props.currentBeat}
        tick={this.props.tick}
      />
      
      <Button onClick={this.toggleSettingsPanel} label="Settings" />

    <SettingsPanel onClick={this.toggleSettingsPanel} active={this.state.settingsPanel} />
    


    </div>
  )}
}

// Commented for now
 {/* <Beat>
        {beatsWithVolume.map((volume: number, index: number) => (
          <SubdivisionIndicator
            volume={volume}
            onChange={changeHandler(index)}
            key={index}
            active={index === currentBeat - 1}
            transitionTimeout={60000 / bpm / 2}
          />
        ))}
      </Beat>
      
      <Flex>
        <Box width="40%">
          Beats:<br />
          <Button type="link" onClick={removeLastBeat} shouldTriggerOnHold label="-" className="mr-2" />
          <Button type="link" onClick={addBeat} shouldTriggerOnHold label="+" />
        </Box>

        <Box width="20%">
          <S.TimeSignature>
            {beatCount} / {subdivision}
          </S.TimeSignature>
          {bpm} BPM
          
          <div>
            <Button onClick={setBpmHandler(-1)} shouldTriggerOnHold label="-" className="mr-2" />
            <Button onClick={setBpmHandler(1)} shouldTriggerOnHold label="+" />
          </div>

          <h1>{currentBeat}</h1>
        </Box>

        <Box width="40%">
          Subdivision:<br />
          <Button onClick={decrementSubdivision} label="-" className="mr-2" />
          <Button onClick={incrementSubdivision} label="+" />
        </Box>
      </Flex>  */}
      
