import { useState } from 'react';
import { Grid, MenuItem, Typography, Card, TextField, Divider, ListItem } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function App() {
  const data = [25, 90, 41, 50, 30, 70];
  const width = 450;
  const height = 100;
  const marginBottom = 18;

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear().domain([0, 5]).range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([9, d3.max(data)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    svg.selectAll('*').remove();
    svg
      .append('g')
      .attr('transform', `translate(7,${height - marginBottom})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0))
      .attr('stroke', 'black');

    svg.append('path').datum(data).attr('class', 'line').attr('d', line).attr('fill', 'none').attr('stroke', 'LimeGreen');
  }, [data, width, height]);

  const [value, setValue] = useState('Jan');
  const [valueManage, setValueManage] = useState('Manage');

  const monthsData = [
    {
      value: 'Jan',
      label: 'January'
    },
    {
      value: 'Feb',
      label: 'Feb'
    },
    {
      value: 'March',
      label: 'March'
    }
  ];
  const manageData = [
    {
      value: 'Manage',
      label: 'Manage'
    },
    {
      value: 'Others',
      label: 'Others'
    }
  ];
  return (
    <Card sx={{ bgcolor: '#fff' }}>
      <Grid container display={'flex'} justifyContent={'around'} style={{ marginTop: '20px', marginLeft: '20px' }}>
        <Typography variant="h4" color="inherit" style={{ marginTop: '20px' }}>
          Checking Account
        </Typography>
        <TextField
          id="dateSelector"
          style={{ marginLeft: '100px' }}
          select
          value={valueManage}
          onChange={(e) => setValueManage(e.target.value)}
        >
          {manageData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="dateSelector" style={{ marginLeft: '20px' }} select value={value} onChange={(e) => setValue(e.target.value)}>
          {monthsData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid container sx={{ marginTop: 5, color: '#fff' }}>
        <div className="App">
          <svg ref={svgRef} width={width} height={height}></svg>
        </div>
      </Grid>
    </Card>
  );
}

export default App;
