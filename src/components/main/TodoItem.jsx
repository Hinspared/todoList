import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { Paper, Grid, Stack, Button } from '@mui/material';
import Text from '../header/Text';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/store/todoSlice';
import ToggleComponent from './ToggleComponent';
import { useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';

export default function TodoItem({
  title,
  place,
  time,
  type,
  completed = true,
  id,
}) {
  const matches = useMediaQuery(`(min-width: 600px)`);
  const size = matches ? '1.5rem' : '.9rem';
  const DeleteButton = matches ? 'DELETE' : <DeleteIcon color="primary" />;
  const variant = matches ? 'outlined' : 'standart';

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
    month: 'numeric',
  };

  const inpTime = new Intl.DateTimeFormat(navigator.language, options).format(
    date
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
              <Text color="#040615" size={size} weight="400" noWrap={true}>
                {title}
              </Text>
              <Text color="gray" weight="300" noWrap={true}>
                {place}
              </Text>
            </Stack>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <ToggleComponent
              completed={completed}
              onChange={handleCompleteClick}
            />
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant={variant}
              color="primary"
              onClick={handleDeleteClick}
            >
              {DeleteButton}
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Text
              color="gray"
              size="1rem"
              weight="100"
              style={{ flexWrap: 'wrap' }}
            >
              {inpTime}
            </Text>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
