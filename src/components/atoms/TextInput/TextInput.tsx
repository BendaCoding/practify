import * as classnames from 'classnames';
import { isEmpty } from 'lodash';
import * as React from 'react';
import * as S from './styles';
import { FieldProps } from 'formik';

interface TextInputBaseProps extends FieldProps {
  name: string;
  type?: 'text' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  hint?: string;
  id?: string;
  error?: string;
  isLoading?: boolean;
}

interface TextInputControlledProps extends TextInputBaseProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextInputUncontrolledProps extends TextInputBaseProps {
  ref: string;
  defaultValue?: string;
}


type TextInputProps = TextInputControlledProps | TextInputUncontrolledProps;

export const TextInput: React.SFC<TextInputProps> = ({ label, hint, error, field, form, ...rest }) => {

  const hintClassNames = classnames('form-text text-muted', { 'has-error': false });

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
