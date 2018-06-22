import * as classnames from 'classnames';
import { isEmpty } from 'lodash';
import * as React from 'react';
import * as S from './styles';

type TextInputProps = ITextInputControlledProps | ITextInputUncontrolledProps;

export const TextInput: React.SFC<any> = ({ label, hint, error, field, form, ...rest }) => {

  const hintClassNames = classnames('form-text text-muted', { 'has-warning': false });

  const descriptiveText = error || hint;
  
  return (
    <div className="form-group">
      <S.Label className="text-input__label">
        {label}
        <input
          className="form-control"
          {...field}
          {...rest}
        />
      </S.Label>

      <small className={hintClassNames}>{descriptiveText}</small>
    </div>
  );
};

TextInput.defaultProps = {
  type: 'text',
};
