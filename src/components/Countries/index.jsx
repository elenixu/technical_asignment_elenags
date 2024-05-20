import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const rows = [
  { id: 'Country 1', rating: '↑', trend: 'Green', score: '100.00' },
  { id: 'Country 2', rating: '↑', trend: 'Green', score: '100.00' },
  { id: 'Country 3', rating: '↑', trend: 'Green', score: '100.00' },
  { id: 'Country 4', rating: '↑', trend: 'Green', score: '100.00' },
  { id: 'Country 5', rating: '↑', trend: 'Green', score: '100.00' },
];

const columns = [
  { id: 'id', label: ' ', width: 90 },
  { id: 'rating', label: 'Rating', width: 150 },
  { id: 'trend', label: 'Trend', width: 110 },
  { id: 'score', label: 'Score', width: 200 },
];

function Countries() {
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
