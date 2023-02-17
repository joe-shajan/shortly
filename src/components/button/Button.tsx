import { LoadingSpinner } from '../../constants';

type Props = {
  value: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ value, isLoading, onClick, disabled }: Props) => {
  let classNames = `px-2 bg-teal-700 hover:bg-teal-900 text-white rounded ${
    isLoading || disabled ? 'cursor-not-allowed' : ''
  }`;

  return (
    <button
      disabled={isLoading || disabled}
      className={classNames}
      onClick={() => (onClick ? onClick() : null)}
    >
      {isLoading ? (
        <div className="w-[50PX]">
          <LoadingSpinner />
        </div>
      ) : (
        value
      )}
    </button>
  );
};

export default Button;
