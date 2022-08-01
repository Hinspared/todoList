import React from 'react';
import { useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Circular() {
  const todos = useSelector((state) => state.todos);
  const completed = todos.filter((todo) => todo.completed);
  const progress = Number(((completed.length / todos.length) * 100).toFixed());

  return (
    <Stack
      direction="row"
      marginTop={3}
      spacing={3}
      justifyContent="flex-end"
      marginBottom={3}
    >
      <CircularProgress
        variant="determinate"
        value={progress}
        color="primary"
      />
      <Typography variant="body1" color="white">
        {progress}% done
      </Typography>
    </Stack>
  );
}
