import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { useNavigate } from 'react-router-dom';

import data from '../data.json';

const columns = [
  { field: 'company', headerName: 'Company' },
  { field: 'ceo', headerName: 'CEO' },
  { field: 'fp2022scope1' },
  { field: 'fp2022scope2location' },
  { field: 'fp2022scope2market' },
  { field: 'fp2022scope3' },
  { field: 'fp2022scope12location' },
  { field: 'fp2022scope12market' },
  { field: 'fp2022total' },
  { field: 'fp2022offset' },
  { field: 'fp2021scope1' },
  { field: 'fp2021scope2location' },
  { field: 'fp2021scope2market' },
  { field: 'fp2021scope3' },
  { field: 'fp2021scope12location' },
  { field: 'fp2021scope12market' },
  { field: 'fp2021total' },
  { field: 'fp2021offset' },
  { field: 'fp2020scope1' },
  { field: 'fp2020scope2location' },
  { field: 'fp2020scope2market' },
  { field: 'fp2020scope3' },
  { field: 'fp2020scope12location' },
  { field: 'fp2020scope12market' },
  { field: 'fp2020total' },
  { field: 'fp2020offset' },
];

export default function Dashboard() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 8,
  // });
  console.log(data);
  const navigate = useNavigate();

  return (
    <Root component="main">
      <Container>
        <Box display="flex" height="100%">
          <Box flex={1} height={300}>
            <DataGrid
              // {...data}
              // loading={data.rows.length === 0}
              columns={columns}
              rows={data}
              rowHeight={60}
              pageSize={10}
              onRowClick={(params) => {
                console.log(params);
                navigate(`/dashboard/${params.id}`);
              }}
            />
          </Box>
        </Box>
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  padding: theme.spacing(0),
}));
