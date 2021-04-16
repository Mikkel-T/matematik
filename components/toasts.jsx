import { toast } from 'react-toastify';

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

export { errorToast };
