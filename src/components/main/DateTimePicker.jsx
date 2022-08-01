import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import TextField from '@mui/material/TextField';

const timeNow = new Date(Date.now());
const initChangeFunc = () => console.log(timeNow);

export default function DateTimePicker({
  onChange = initChangeFunc,
  value = timeNow,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        value={value}
        onChange={onChange}
        label="Time"
        name="time"
        id={Date.now()}
        minDate={new Date('2022-01-01T00:00')}
        inputFormat="yyyy/MM/dd hh:mm a"
        mask="___/__/__ __:__ _M"
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
