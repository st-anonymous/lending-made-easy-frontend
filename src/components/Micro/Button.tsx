import { ButtonProps } from '../../types/Types';

const Button = (props: ButtonProps) => {
  const { text, size, type, onClick = undefined } = props;
  let className = '';

  switch (size) {
    case 'small':
      className += 'w-32 ';
      break;
    case 'medium':
      className += 'w-48 ';
      break;
    case 'large':
      className += 'w-64 ';
      break;
  }

  switch (type) {
    case 'primary':
      className += 'bg-purple-800 text-stone-200';
      break;
    case 'secondary':
      className += 'text-purple-800 bg-stone-200 border border-purple-800';
      break;
  }

  return (
    <button onClick={onClick} className={`h-10 rounded-lg ${className}`}>
      {text}
    </button>
  );
};

export default Button;
