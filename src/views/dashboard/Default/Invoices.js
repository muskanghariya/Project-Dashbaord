import * as d3 from 'd3';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Avatar, Box, Grid, Menu, MenuItem, Typography, Card, TextField, Divider, Button } from '@mui/material';

const data = [
  { label: 'Older', values: 2 },
  { label: 'Jan01-08', values: 7 },
  { label: 'Jan09-16', values: 6 },
  { label: 'Jan17-24', values: 4 },
  { label: 'Jan25-31', values: 9 },
  { label: 'Future', values: 3 }
];
export function Invoices() {
  const margin = { top: 300, right: 0, bottom: 2, left: 30 };
  const width = 400 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const scaleX = d3
    .scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.8);
  const scaleY = d3
    .scaleLinear()
    .domain([0, Math.max(...data.map(({ values }) => values))])
    .range([height, 0]);
  const ref = useRef();

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    ref.current.click();
  };
  return (
    <>
      <Card sx={{ bgcolor: '#fff' }}>
        <Grid container display={'flex'} style={{ marginTop: '20px', alignItems: 'center', marginLeft: '15px' }}>
          <Typography variant="h4" color="inherit">
            Invoices owed to you
          </Typography>
          <Button style={{ marginLeft: '155px', backgroundColor: '#D3D3D3', color: 'green' }} onClick={handleClick}>
            New Invoice sales
          </Button>
          <input ref={ref} type="file" id="input_file" style={{ display: 'none' }} />
        </Grid>
        <Divider sx={{ mt: 2 }} />
        <Grid container sx={{ marginTop: 5, color: '#fff' }}>
          <svg width={450} height={130}>
            {data.map(({ values, label }) => (
              <rect
                key={`bar-${label}`}
                x={scaleX(label) + 10}
                y={height - scaleY(values)}
                width={scaleX.bandwidth()}
                height={height - scaleY(values) + 100}
                fill="LimeGreen"
              />
            ))}
          </svg>
        </Grid>
      </Card>
    </>
  );
}
