import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import { Paper, Grid } from '@mui/material';
import { Stack } from '@mui/material';
import Text from '../header/Text';

export default function TodoItem({ title, place, time }) {
  const date = new Date(time);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'short',
  };
  const inpTime = new Intl.DateTimeFormat(navigator.language, options).format(
    date
  );

  return (
    <>
      <Paper elevation={5}>
        <Grid container spacing={0} p="0.5rem 0.5rem" justifyContent="center">
          <Grid item xs={2}>
            <WorkIcon fontSize="large" color="primary" />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Text color="#040615" size="1.5rem" weight="400">
                {title}
              </Text>
              <Text color="gray" weight="300">
                {place}
              </Text>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Text color="gray" size="1rem" weight="100">
              {inpTime}
            </Text>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
