export type ButtonProps = {
  text: string;
  size: 'large' | 'medium' | 'small';
  type: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
