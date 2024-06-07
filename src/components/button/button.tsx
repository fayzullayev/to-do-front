import { ButtonContainer } from './style.ts';
import { HTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
