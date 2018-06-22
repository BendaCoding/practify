declare interface ITextInputBaseProps {
  type?: 'text' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  name: string;
  hint?: string;
  id?: string;
  warning?: string;
  isLoading?: boolean;
}

declare interface ITextInputControlledProps extends ITextInputBaseProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

declare interface ITextInputUncontrolledProps extends ITextInputBaseProps {
  ref: string;
  defaultValue?: string;
}
