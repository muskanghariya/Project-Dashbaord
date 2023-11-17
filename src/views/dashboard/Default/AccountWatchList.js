import { Card, Typography, Divider } from '@mui/material';

export const AccountWatchList = () => {
  return (
    <Card sx={{ bgcolor: '#fff' }}>
      <Typography variant="h4" color="inherit" style={{ marginTop: '20px', marginLeft: '20px' }}>
        Account watchlist
      </Typography>
      <Divider sx={{ mt: 2 }} />
      <table style={{ marginTop: '20px', marginLeft: '20px' }}>
        <thead>
          <tr>
            <td style={{ width: 300, paddingTop: '10px', paddingBottom: '10px' }}>Account</td>
            <td style={{ width: 150 }}>This Month</td>
            <td>YTD</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 'bold', paddingTop: '2px', paddingBottom: '2px' }}>Sales</td>
            <td style={{ fontWeight: 'bold' }}>1194.58</td>
            <td style={{ fontWeight: 'bold' }}>11418.29</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Advertising</td>
            <td style={{ fontWeight: 'bold' }}>6879.02</td>
            <td style={{ fontWeight: 'bold' }}>9271.36</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Inventory</td>
            <td style={{ fontWeight: 'bold' }}>4692.26</td>
            <td style={{ fontWeight: 'bold' }}>9768.09</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Entertainment</td>
            <td style={{ fontWeight: 'bold' }}>0.00</td>
            <td style={{ fontWeight: 'bold' }}>0.00</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', paddingTop: '1px', paddingBottom: '1px' }}>Product</td>
            <td style={{ fontWeight: 'bold' }}>4652.10</td>
            <td style={{ fontWeight: 'bold' }}>2529.90</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};
