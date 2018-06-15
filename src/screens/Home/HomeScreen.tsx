import * as React from 'react';
import { Authentification } from './Authentification/Authentification';

export class HomeScreen extends React.Component {

  onSelectExercise = (id: string) => {
    this.setState({ activeExerciseId: id });
  }

  render() {
    return (
      <div>

        <div className="practice__content">

          <Authentification />

        </div>

      </div>
    );
  }
}
