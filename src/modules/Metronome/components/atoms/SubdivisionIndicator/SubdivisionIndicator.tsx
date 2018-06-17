import * as React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

interface IProps {
  volume: number;
  onChange: () => void;
  active?: boolean
}

export const SubdivisionIndicator: React.SFC<IProps> = ({ volume, onChange, active = false }) => (
  <Slider
    value={volume}
    orientation="vertical"
    onChange={onChange}
    min={0}
    max={3}
  />
)