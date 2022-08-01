import { React, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

export default function InputField({
  name,
  onChange,
  select = false,
  value = '',
}) {
  if (select) {
    return (
      <TextField
        id={Date.now().toString()}
        name={name}
        label={name[0].toUpperCase() + name.slice(1)}
        type="text"
        select={select}
        fullWidth
        variant="standard"
        onChange={onChange}
        value={value}
      >
        <MenuItem value="personal">Personal</MenuItem>
        <MenuItem value="business">Business</MenuItem>
      </TextField>
    );
  } else {
    return (
      <TextField
        id={Date.now().toString()}
        name={name}
        label={name[0].toUpperCase() + name.slice(1)}
        type="text"
        select={select}
        fullWidth
        variant="standard"
        onChange={onChange}
      />
    );
  }
}
