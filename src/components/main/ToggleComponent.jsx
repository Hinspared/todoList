import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function ToggleComponent({ completed, onChange }) {
  const Icon = () =>
    completed === true ? (
      <CheckCircleOutlineIcon />
    ) : (
      <RadioButtonUncheckedIcon />
    );
  const Completed = () =>
    completed === true ? (
      <FormControlLabel
        control={<Switch defaultChecked />}
        onChange={onChange}
        label={<Icon />}
      />
    ) : (
      <FormControlLabel
        control={<Switch />}
        label={<Icon />}
        onChange={onChange}
      />
    );
  return <Completed />;
}
