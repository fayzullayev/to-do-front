import { ButtonContainer } from './style.ts';
import { HTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

function Button({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
