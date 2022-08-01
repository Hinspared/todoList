import React from 'react';
import Typography from '@mui/material/Typography';

export default function Text({
  children,
  weight = '700',
  size,
  align = 'left',
  color = 'white',
}) {
  return (
    <Typography
      variant="body1"
      color={color}
      sx={{ fontWeight: `${weight}`, fontSize: `${size}` }}
      textAlign={align}
    >
      {children}
    </Typography>
  );
}
