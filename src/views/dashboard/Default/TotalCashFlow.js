import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { Grid, Typography, Card, Divider, Button } from '@mui/material';
import { axisBottom, select } from 'd3';

const data = [
  { label: 'Older', values: 2 },
  { label: 'Jan01-08', values: 7 },
  { label: 'Jan09-16', values: 6 },
  { label: 'Jan17-24', values: 4 },
  { label: 'Jan25-31', values: 9 },
  { label: 'Future', values: 3 }
];
export function TotalCashFlow() {
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

  function AxisBottom({ transform }) {
    const ref = useRef();

    useEffect(() => {
      if (ref.current) {
        select(ref.current).call(axisBottom(scaleX));
      }
    }, [scaleX]);

    return <g ref={ref} transform={transform} />;
  }
  return (
    <>
      <Card sx={{ bgcolor: '#fff' }}>
        <Grid container display={'flex'} style={{ marginTop: '20px', alignItems: 'center', marginLeft: '15px' }}>
          <Typography variant="h4" color="inherit">
            Total cash flow
          </Typography>
          <div
            style={{
              borderRadius: '5px',
              overflow: 'hidden',
              display: 'inline-block',
              marginLeft: '260px',
              width: '20px',
              height: '20px',
              background: 'green'
            }}
          ></div>
          <Typography style={{ marginLeft: '5px' }}>In</Typography>
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '5px',
              display: 'inline-block',
              marginLeft: '10px',
              width: '20px',
              height: '20px',
              background: 'LimeGreen'
            }}
          ></div>
          <Typography style={{ marginLeft: '5px' }}>Out</Typography>
        </Grid>
        <Divider sx={{ mt: 2 }} />
        <Grid container sx={{ marginTop: 5, color: '#fff' }}>
          <svg width={450} height={130}>
            {data.map(({ values, label }) => (
              <rect
                key={`bar-${label}`}
                x={scaleX(label)}
                y={height - scaleY(values) + 10}
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
