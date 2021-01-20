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
          <p>
            Dette kan være fordi du har brugt komma i stedet for punktum i et
            decimaltal
          </p>
        </div>
      );
      break;

    default:
      toast.error(
        <div>
          <p>Der opstod en fejl</p>
        </div>
      );
      break;
  }
}

export { copyToast, errorToast };
