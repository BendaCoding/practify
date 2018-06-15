declare interface ITextInputBaseProps {
  type?: 'text' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  hint?: string;
  id?: string;
  name?: string;
  warning?: string;
}

declare interface ITextInputControlledProps extends ITextInputBaseProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

declare interface ITextInputUncontrolledProps extends ITextInputBaseProps {
  ref: string;
  defaultValue?: string;
}
