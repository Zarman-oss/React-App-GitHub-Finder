import { useContext } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white">
            <FaExclamationCircle /> {/* Error icon from react-icons */}
          </span>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
