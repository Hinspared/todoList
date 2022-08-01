import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog({
  open = false,
  onSubmit,
  onClose,
  onClick,
  children,
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={onClick} sx={{ marginTop: '2rem' }}>
        <AddCircleIcon color="primary" sx={{ fontSize: '5rem' }} />
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            background: '#6E85B7',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: 'white' }}>
          Add new thing
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>{children}</Stack>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={onSubmit}
            varitant="contained"
            sx={{ color: 'white', background: '#0096FF', maxWidth: '87%' }}
            fullWidth
          >
            ADD YOUR THING
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
