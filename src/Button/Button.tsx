import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { StyledButton } from './Button.styled';
import { CSS } from './../theme';
import { VariantColorsProps } from './../utils/prop-types';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VariantColorsProps;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  children?: React.ReactNode | undefined;
  css?: CSS;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Primary UI component for user interaction
 */
export const Button:React.FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};