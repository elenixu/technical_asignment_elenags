import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const columns = [
  { id: 'id', label: ' ', width: 90 },
  { id: 'rating', label: 'Rating', width: 150 },
  { id: 'trend', label: 'Trend', width: 110 },
  { id: 'score', label: 'Score', width: 200 },
];

function Countries({ country1, country2, country3, country4, country5}) {

  // Constructing rows array using props
  const rows = [
    { id: country1.name, rating: country1.rating, trend: country1.trend, score: country1.score },
    { id: country2.name, rating: country2.rating, trend: country2.trend, score: country2.score },
    { id: country3.name, rating: country3.rating, trend: country3.trend, score: country3.score },
    { id: country4.name, rating: country4.rating, trend: country4.trend, score: country4.score },
    { id: country5.name, rating: country5.rating, trend: country5.trend, score: country5.score },
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        width: '776px',
        height: '400px', 
        padding: '16px',
        flexShrink: 0,
        borderRadius: '20px',
        background: 'var(--Gray-2, #F7F6FA)',
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} width={column.width}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id} width={column.width}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Countries;
