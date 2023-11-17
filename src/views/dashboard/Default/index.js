import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import EarningCard from './CheckingAccount';
import { Invoices } from './Invoices';
import { AccountWatchList } from './AccountWatchList';
import { gridSpacing } from 'store/constant';
import { TotalCashFlow } from './TotalCashFlow';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={6} md={6} sm={6} xs={1}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={1}>
            <Invoices isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={4} md={6}>
            <TotalCashFlow isLoading={isLoading} />
          </Grid>
          <Grid item xs={4} md={6}>
            <AccountWatchList isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
