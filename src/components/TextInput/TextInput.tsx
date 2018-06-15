import * as classnames from 'classnames';
import { isEmpty } from 'lodash';
import * as React from 'react';
import { Styled } from './styles';

type TextInputProps = ITextInputControlledProps | ITextInputUncontrolledProps;

export const TextInput: React.SFC<TextInputProps> = ({ type, label, placeholder, id, hint, warning, ...rest }) => {

  const hintClassNames = classnames('form-text text-muted', { 'has-warning': !!warning });

  const hintText = isEmpty(warning) ? hint : warning;

  return (
    <Styled className="form-group">
      <label className="text-input__label">
        {label}
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </label>

      <small className={hintClassNames}>{hintText}</small>
    </Styled>
  );
};

TextInput.defaultProps = {
  type: 'text',
};
