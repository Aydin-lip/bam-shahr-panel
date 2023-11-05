import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { XMarkIcon } from '@heroicons/react/20/solid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

const ModalComponent = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className='flex justify-center items-center w-full h-full'>
            <div className='rounded-lg p-6 bg-dark-them-light relative'>
              <span className='absolute top-2 right-2 text-white p-1 bg-dark-them rounded cursor-pointer transition-all'>
                <XMarkIcon className='w-5 h-5' />
              </span>
              <Typography variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalComponent