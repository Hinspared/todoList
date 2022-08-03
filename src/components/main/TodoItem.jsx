import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { Paper, Grid, Stack, Button } from '@mui/material';
import Text from '../header/Text';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/store/todoSlice';

export default function TodoItem({
  title,
  place,
  time,
  type,
  completed = true,
  id,
}) {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const Icon = () =>
    type === 'personal' ? (
      <FamilyRestroomIcon fontSize="large" color="primary" />
    ) : (
      <WorkIcon fontSize="large" color="primary" />
    );
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
  const Completed = () =>
    completed === true ? (
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="completed"
        onClick={handleCompleteClick}
      />
    ) : (
      <FormControlLabel
        control={<Switch />}
        label="in process"
        onClick={handleCompleteClick}
      />
    );

  return (
    <>
      <Paper elevation={5}>
        <Grid container spacing={0} p="0.5rem 0.5rem">
          <Grid item xs={2} padding={1}>
            <Icon />
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <Text color="#040615" size="1.5rem" weight="400">
                {title}
              </Text>
              <Text color="gray" weight="300">
                {place}
              </Text>
            </Stack>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Completed />
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <Text color="#040615" size="1.2rem" weight="400">
              Delete
            </Text> */}
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Text color="gray" size="1rem" weight="100">
              {inpTime}
            </Text>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
