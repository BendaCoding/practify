import * as classnames from 'classnames';
import { isEmpty } from 'lodash';
import * as React from 'react';
import { Styled } from './styles';

type TextInputProps = ITextInputControlledProps | ITextInputUncontrolledProps;

export const TextInput: React.SFC<any> = ({ label, hint, field, form, ...rest }) => {

  const hintClassNames = classnames('form-text text-muted', { 'has-warning': false });

  const hintText = hint;
  
  return (
    <Styled className="form-group">
      <label className="text-input__label">
        {label}
        <input
          className="form-control"
          {...field}
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
