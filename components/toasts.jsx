import { toast } from 'react-toastify';
import styles from '../styles/Home.module.css';

function copyToast() {
  toast.info('Kopierede linket');
}

function errorToast(error, errorMsg) {
  switch (error) {
    case 'isNotNum':
      toast.error(
        <div>
          <p>{errorMsg}</p>
        </div>
      );
      break;

    default:
      toast.error(
        <div>
          <p>Der opstod en fejl</p>
          <p>{errorMsg}</p>
        </div>
      );
      break;
  }
}

export { copyToast, errorToast };
