import { Button } from 'antd';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default MyButton;
