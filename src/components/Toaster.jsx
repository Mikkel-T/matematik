import toast, { Toaster } from 'react-hot-toast';
import { emitter } from '@event/toast';

export default function Toast() {
  emitter.on('toast', (message, options) => {
    toast(message, options);
  });

  return (
      <Toaster position="bottom-right" />
  );
}
