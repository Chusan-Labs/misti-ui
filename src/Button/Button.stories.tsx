import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    
    children: 'Button',
  },
};

export const Large: ComponentStoryObj<typeof Button> = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Small: ComponentStoryObj<typeof Button> = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};