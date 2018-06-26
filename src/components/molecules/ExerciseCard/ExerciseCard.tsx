import * as classnames from 'classnames';
import * as React from 'react';
import * as S from './styled';

export interface IExerciseCardProps {
  name: string;
  desc: string;
  _id: string;
  onClick: (index: number) => void;
  active?: boolean;
}

export class ExerciseCard extends React.Component<IExerciseCardProps> {

  onClick = () => {
    this.props.onClick(1);
  }

  render() {
    const { name, desc, active }: IExerciseCardProps = this.props;
    const cardClasses = classnames({ 'active': active}, 'card');
    return (
      <S.ExerciseCard className={cardClasses} onClick={this.onClick}>
        <div className="card-body">
          <S.CardTitle>{name}</S.CardTitle>
          <S.CardText>{desc}</S.CardText>
        </div>
      </S.ExerciseCard>
    );
  }
}
