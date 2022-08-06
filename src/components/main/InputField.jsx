import { React, useEffect, forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const InputField = forwardRef((props, ref) => {
  useEffect(() => {
    if (props.name === 'title') ref.current.focus();
  }, [props.open]);

  if (props.select) {
    return (
      <TextField
        id={Date.now().toString()}
        name={props.name}
        label={props.name[0].toUpperCase() + props.name.slice(1)}
        type="text"
        select={props.select}
        fullWidth
        variant="standard"
        onChange={props.onChange}
        value={props.value}
        inputRef={ref}
        onKeyDown={props.onKeyDown}
      >
        <MenuItem value="personal">Personal</MenuItem>
        <MenuItem value="business">Business</MenuItem>
      </TextField>
    );
  } else {
    return (
      <TextField
        id={Date.now().toString()}
        name={props.name}
        label={props.name[0].toUpperCase() + props.name.slice(1)}
        type="text"
        select={props.select}
        fullWidth
        variant="standard"
        onChange={props.onChange}
        inputProps={{
          maxLength: 16,
          autoComplete: 'off',
        }}
        onKeyDown={props.onKeyDown}
        inputRef={ref}
      />
    );
  }
});

export default InputField;
