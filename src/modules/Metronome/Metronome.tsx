import * as React from 'react';
import { Beat, SubdivisionIndicator } from './components';
import { AudioHandler } from './components/atoms/AudioHandler';
import { Button } from 'practify/components';
import { Flex, Box } from 'grid-styled';
import * as S from './styled';
import { IMetronomeProps } from './Metronome.container';


export const Metronome: React.SFC<IMetronomeProps> = ({
  beatsWithVolume = [],
  currentBeat,
  tick,
  changeHandler,
  isRunning,
  beatCount,
  subdivision,
  addBeat,
  removeBeat,
  bpm,
  setBpm,
  incrementSubdivision,
  decrementSubdivision,
}: any) => {

  const removeLastBeat = () => {
    removeBeat(beatCount - 1);
  }

  const setBpmHandler = (add: number) => () => {
    setBpm(bpm + add);
  }

  return (
    <div className="my-5">
      <h1>Metronome</h1>

      <AudioHandler
        isRunning={isRunning}
        bpm={bpm}
        subdivision={1}
        beatsWithVolume={beatsWithVolume}
        currentBeat={currentBeat}
        tick={tick}
      />

      <Beat>
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
      </Flex>
      
    </div>
  )
}