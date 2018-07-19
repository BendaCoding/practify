import * as React from 'react';
import { Beat, SubdivisionIndicator } from './components';
import { AudioHandler } from './components/atoms/AudioHandler';
import { Button } from 'practify/components';
import { Flex, Box } from 'grid-styled';
import * as S from './styled';
import { IMetronomeProps } from './Metronome.container';
import { SettingsPanel } from './components/molecules/SettingsPanel';
import { decrementSubdivision } from './store/metronome.actions';
import { FaCog } from "react-icons/lib/fa";

export class Metronome extends React.PureComponent<IMetronomeProps> {

  state = {
    settingsPanel: false,
  }

  toggleSettingsPanel = () => {
    this.setState({ settingsPanel: !this.state.settingsPanel });
  }

  removeLastBeat = () => {
    this.props.removeBeat(this.props.beatCount - 1);
  }

  setBpmHandler = (add: number) => () => {
    this.props.setBpm(this.props.bpm + add);
  }

  halveSubdivision = () => {
    if(this.props.subdivision > 1 && !(this.props.subdivision%2) ){
      this.props.setSubdivision(this.props.subdivision / 2); 
    }
  }

  doubleSubdivision = () => {
      this.props.setSubdivision(this.props.subdivision * 2); 
  }

  render() {
    return (
      <div>

        <AudioHandler
          isRunning={this.props.isRunning}
          bpm={this.props.bpm}
          subdivision={this.props.subdivision}
          beatsWithVolume={this.props.beatsWithVolume}
          currentBeat={this.props.currentBeat}
          tick={this.props.tick}
        />
        <S.Cog>
        <FaCog onClick={this.toggleSettingsPanel} size="100%"/>
        </S.Cog>
        <SettingsPanel
          onClick={this.toggleSettingsPanel}
          setBpm={this.props.setBpm}
          bpm={this.props.bpm}
          active={this.state.settingsPanel}
          subdivision={this.props.subdivision}
          doubleSubdivision={this.doubleSubdivision}
          halveSubdivision={this.halveSubdivision}
        />



      </div>
    )
  }
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
      
