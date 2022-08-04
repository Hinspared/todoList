import React from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

export default function Text({
  children,
  weight = '700',
  size,
  align = 'left',
  color = 'white',
  noWrap = false,
}) {
  return (
    <Tooltip
      title={
        children.length < 15 || typeof children === 'number' ? '' : children
      }
    >
      <Typography
        variant="body1"
        color={color}
        sx={{ fontWeight: `${weight}`, fontSize: `${size}` }}
        textAlign={align}
        noWrap={noWrap}
      >
        {children}
      </Typography>
    </Tooltip>
  );
  // if (children.offsetWidth < children.scrollWidth) {
  //   return (
  //     <Tooltip title={children}>
  //       <Typography
  //         variant="body1"
  //         color={color}
  //         sx={{ fontWeight: `${weight}`, fontSize: `${size}` }}
  //         textAlign={align}
  //         noWrap
  //       >
  //         {children}
  //       </Typography>
  //     </Tooltip>
  //   );
  // } else {
  //   <Typography
  //     variant="body1"
  //     color={color}
  //     sx={{ fontWeight: `${weight}`, fontSize: `${size}` }}
  //     textAlign={align}
  //     noWrap
  //   >
  //     {children}
  //   </Typography>;
  // }
  // // (
}
