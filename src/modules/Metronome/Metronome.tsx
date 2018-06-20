import * as React from 'react';
import { Beat, SubdivisionIndicator } from './components';
import { AudioHandler } from './components/atoms/AudioHandler';
import { Button } from 'practify/components';
import { Flex, Box } from 'grid-styled';
import * as S from './styled';
import { IMetronomeProps } from './Metronome.container';


export const Metronome: React.SFC<IMetronomeProps> = ({
  beatsWithVolume = [],
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
      />

      <Beat>
        {beatsWithVolume.map((volume: number, index: number) => (
          <SubdivisionIndicator
            volume={volume}
            onChange={changeHandler(index)}
            key={index}
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