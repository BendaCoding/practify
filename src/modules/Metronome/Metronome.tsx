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
  incrementSubdivision,
  decrementSubdivision,
}: any) => {

  const removeLastBeat = () => {
    removeBeat(beatCount - 1);
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
          <Button onClick={addBeat} shouldTriggerOnHold label="+" className="mr-2" />
          <Button onClick={removeLastBeat} shouldTriggerOnHold label="-" />
        </Box>

        <Box width="20%">
          <S.TimeSignature>
            {beatCount} / {subdivision}
          </S.TimeSignature>
          {bpm} BPM
          <h1>{currentBeat}</h1>
        </Box>

        <Box width="40%">
          Subdivision:<br />
          <Button onClick={incrementSubdivision} label="+" className="mr-2" />
          <Button onClick={decrementSubdivision} label="-" />
        </Box>
      </Flex>
      
    </div>
  )
}