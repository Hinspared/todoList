import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import mountains from '../../img/mountains.png';
import Text from './Text';
import Circular from './Circular';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

export default function Header() {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const todos = useSelector((state) => state.todos);
  const date = new Intl.DateTimeFormat(navigator.language, options).format(
    new Date()
  );
  const personal = todos.filter((todo) => todo.type === 'personal');
  const business = todos.filter((todo) => todo.type === 'business');
  const matches = useMediaQuery(`(min-width: 600px)`);
  const size = matches ? '1.5rem' : '.9rem';

  return (
    <div
      style={{
        backgroundImage: `url(${mountains})`,

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        p: '0',
        m: '0',
        borderRadius: '1rem',
      }}
    >
      <Grid container spacing={0} sx={{ p: '0', m: '0' }}>
        <Grid item xs={7} sx={{ p: '1rem' }}>
          <Text weight="300" size="3rem">
            Your <br /> Things
          </Text>
          <Text weight="100" size="1rem">
            {date}
          </Text>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            backgroundColor: 'rgba(228, 165, 152, 0.2)',
            borderRadius: '0 1rem 1rem 0',
          }}
        >
          <Grid
            container
            spacing={2}
            paddingTop={8}
            sx={{ paddingRight: '1rem' }}
          >
            <Grid item xs={6}>
              <Text size="2rem" align="right">
                {personal.length}
              </Text>
              <Text weight="300" size={size} align="right">
                Personal
              </Text>
            </Grid>
            <Grid item xs={6}>
              <Text size="2rem" align="right">
                {business.length}
              </Text>
              <Text weight="300" size={size} align="right">
                Business
              </Text>
            </Grid>
          </Grid>
          <Container maxWidth="xs">
            <Circular />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
console.log();
