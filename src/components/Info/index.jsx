import { Container, Typography } from '@mui/material';
import React from 'react';

function Info({ goal }) {
  return (
    <div>
      <Container 
        sx={{
          display: 'flex',
          width: '576px',
          height: '158px',
          padding: '16px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px',
          flexShrink: 0,
          borderRadius: '12px',
          background: 'var(--Gray-2, #F7F6FA)',
        }}
      >
            <Typography variant="biotitle">
              {goal.title}
            </Typography>
            <Typography variant="biotext">
              {goal.description}
            </Typography>
      </Container>
    </div>
  );
}

export default Info;
