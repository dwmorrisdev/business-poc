import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconComponent from '../IconDict';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
  headerText: string;
  bodyText: string;
  icon: string;
}

export default function ModalComponent({
  showModal,
  handleClose,
  headerText,
  bodyText,
  icon
}: ModalProps) {
  console.log('icon -> ', icon)
  return (
    <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              { headerText }
              <IconComponent icon={icon} />
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, p: 1 }}>
            { bodyText }
          </Typography>
        </Box>
      </Modal>
  );
}