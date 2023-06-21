import { StyledInputWrapper, StyledInput, StyledIcon } from './styles';

interface IInputProps {
  type?: 'text' | 'number';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export default function Input({
  type = 'text',
  value,
  setValue,
  icon,
  placeholder,
  fullWidth = false,
}: IInputProps) {
  return (
    <StyledInputWrapper className='inputWrapper'>
      <StyledInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        $fullWidth={fullWidth}
        $hasIcon={!(icon === undefined)}
      />
      {icon && <StyledIcon src={icon} />}
    </StyledInputWrapper>
  );
}
