import { Dialog } from './dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

export const Default = () => {
  return  (
    <Dialog>
      Default Dialog
    </Dialog>
  );
};

export const Open = () => {
  return  (
    <Dialog open>
      Default Dialog
    </Dialog>
  );
};
