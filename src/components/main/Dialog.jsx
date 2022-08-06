import React from 'react';
import { useDispatch } from 'react-redux';
import InputField from './InputField';
import DateTimePicker from './DateTimePicker';
import { addTodo } from '../../redux/store/todoSlice';
import FormDialog from './FormDialog';

export default function Dialog() {
  // FormDialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Clear todo on close
  React.useEffect(() => {
    setTodo({
      id: null,
      title: null,
      type: '',
      place: null,
      time: null,
      completed: false,
    });
    setType('');
  }, [!open]);

  // Todo
  const [todo, setTodo] = React.useState({
    id: null,
    title: null,
    type: '',
    place: null,
    time: null,
    completed: false,
  });

  const todocopy = todo;
  todocopy.id = Date.now();

  const dispatch = useDispatch();

  // DateTimePicker change display time
  const [time, setTime] = React.useState(new Date(Date.now()));

  // Change type of Todo between business and personal
  const [type, setType] = React.useState('');

  // Handlers
  const handleChange = (e) => {
    if (e.target !== undefined) {
      const { name, value } = e.target;
      setTodo({ ...todo, [name]: value });
      if (name == 'type') setType(value);
    } else {
      setTime(e);
      setTodo({ ...todo, time: e.toString() });
    }
  };
  const handleSubmit = () => {
    const condition = Object.values(todo).some((value) => value === null || '');
    if (condition) return alert('You should fill all fields');
    setTodo({ todocopy });
    dispatch(addTodo(todo));
    setOpen(false);
  };
  // Jump to next input on the key "Enter"
  const refTitle = React.useRef(null);
  const refPlace = React.useRef(null);
  let i = 1;

  const handleEnter = (e) => {
    const refs = [refTitle, refPlace];
    if (e.key.toLowerCase() === 'enter') {
      refs[i].current.focus();
      if (i === 1) {
        i = 0;
      } else {
        i = 1;
      }
    }
  };

  return (
    <FormDialog
      open={open}
      onClose={handleClose}
      onClick={handleClickOpen}
      onSubmit={handleSubmit}
    >
      <InputField name="type" select value={type} onChange={handleChange} />
      <InputField
        name="title"
        onChange={handleChange}
        open={open}
        onKeyDown={handleEnter}
        ref={refTitle}
      />
      <InputField
        name="place"
        onChange={handleChange}
        ref={refPlace}
        onKeyDown={handleEnter}
      />
      <DateTimePicker value={time} onChange={handleChange} />
    </FormDialog>
  );
}
