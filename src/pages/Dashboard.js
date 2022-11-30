import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import ColumnVisibility from '../components/ColumnVisibility';
import data from '../data.json';

export const columns = [
  {
    field: 'company',
    headerName: 'Company',
    minWidth: 200,
  },
  {
    field: 'ceo',
    headerName: 'CEO',
    minWidth: 180,
  },
  {
    field: 'fp2022scope1',
    headerName: 'Scope 1',
    type: 'number',
  },
  {
    field: 'fp2022scope2location',
    headerName: `Scope 2 Location`,
    renderHeader: () => (
      <HeaderTitle>
        Scope 2<br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2022scope2market',
    headerName: 'Scope 2 Market',
    renderHeader: () => (
      <HeaderTitle>
        Scope 2<br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2022scope3',
    headerName: 'Scope 3',
    type: 'number',
  },
  {
    field: 'fp2022scope12location',
    headerName: 'Scope 1 & 2 Location',
    renderHeader: () => (
      <HeaderTitle>
        Scope 1 & 2<br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2022scope12market',
    headerName: 'Scope 1 & 2 Market',
    renderHeader: () => (
      <HeaderTitle>
        Scope 1 & 2<br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2022totallocation',
    headerName: 'Total Location',
    renderHeader: () => (
      <HeaderTitle>
        Total
        <br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2022totalmarket',
    headerName: 'Total Market',
    renderHeader: () => (
      <HeaderTitle>
        Total
        <br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2022offset',
    headerName: 'Offset',
    type: 'number',
  },
  {
    field: 'fp2021scope1',
    headerName: 'Scope 1',
    type: 'number',
  },
  {
    field: 'fp2021scope2location',
    headerName: `Scope 2 Location`,
    renderHeader: () => (
      <HeaderTitle>
        Scope 2<br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2021scope2market',
    headerName: 'Scope 2 Market',
    renderHeader: () => (
      <HeaderTitle>
        Scope 2<br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2021scope3',
    headerName: 'Scope 3',
    type: 'number',
  },
  {
    field: 'fp2021scope12location',
    headerName: 'Scope 1 & 2 Location',
    renderHeader: () => (
      <HeaderTitle>
        Scope 1 & 2<br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2021scope12market',
    headerName: 'Scope 1 & 2 Market',
    renderHeader: () => (
      <HeaderTitle>
        Scope 1 & 2<br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2021totallocation',
    headerName: 'Total Location',
    renderHeader: () => (
      <HeaderTitle>
        Total
        <br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2021totalmarket',
    headerName: 'Total Market',
    renderHeader: () => (
      <HeaderTitle>
        Total
        <br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2021offset',
    headerName: 'Offset',
    type: 'number',
  },
  {
    field: 'fp2020scope1',
    headerName: 'Scope 1',
    type: 'number',
  },
  {
    field: 'fp2020scope2location',
    headerName: `Scope 2 Location`,
    renderHeader: () => (
      <HeaderTitle>
        Scope 2<br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2020scope2market',
    headerName: 'Scope 2 Market',
    renderHeader: () => (
      <HeaderTitle>
        Scope 2<br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2020scope3',
    headerName: 'Scope 3',
  },
  {
    field: 'fp2020scope12location',
    headerName: 'Scope 1 & 2 Location',
    renderHeader: () => (
      <HeaderTitle>
        Scope 1 & 2<br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2020scope12market',
    headerName: 'Scope 1 & 2 Market',
    renderHeader: () => (
      <HeaderTitle>
        Scope 1 & 2<br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2020totallocation',
    headerName: 'Total Location',
    renderHeader: () => (
      <HeaderTitle>
        Total
        <br />
        Location
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2020totalmarket',
    headerName: 'Total Market',
    renderHeader: () => (
      <HeaderTitle>
        Total
        <br />
        Market
      </HeaderTitle>
    ),
    type: 'number',
  },
  {
    field: 'fp2020offset',
    headerName: 'Offset',
    type: 'number',
  },
];

const columnGroupingModel = [
  {
    groupId: '2022',
    // headerAlign: 'center',
    children: [
      { field: 'fp2022scope1' },
      { field: 'fp2022scope2location' },
      { field: 'fp2022scope2market' },
      { field: 'fp2022scope3' },
      { field: 'fp2022scope12location' },
      { field: 'fp2022scope12market' },
      { field: 'fp2022totallocation' },
      { field: 'fp2022totalmarket' },
      { field: 'fp2022offset' },
    ],
  },
  {
    groupId: '2021',
    children: [
      { field: 'fp2021scope1' },
      { field: 'fp2021scope2location' },
      { field: 'fp2021scope2market' },
      { field: 'fp2021scope3' },
      { field: 'fp2021scope12location' },
      { field: 'fp2021scope12market' },
      { field: 'fp2021totallocation' },
      { field: 'fp2021totalmarket' },
      { field: 'fp2021offset' },
    ],
  },
  {
    groupId: '2020',
    children: [
      { field: 'fp2020scope1' },
      { field: 'fp2020scope2location' },
      { field: 'fp2020scope2market' },
      { field: 'fp2020scope3' },
      { field: 'fp2020scope12location' },
      { field: 'fp2020scope12market' },
      { field: 'fp2020totallocation' },
      { field: 'fp2020totalmarket' },
      { field: 'fp2020offset' },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [columnVisibilityModel, setColumnVisibilityModel] = useState(
    columns.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.field]: true,
      }),
      {}
    )
  );

  const onColumnVisibilityChange = useCallback(
    (state) => {
      setColumnVisibilityModel(
        Object.entries(state).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`fp2022${key}`]: value,
            [`fp2021${key}`]: value,
            [`fp2020${key}`]: value,
          }),
          {}
        )
      );
    },
    [setColumnVisibilityModel]
  );

  return (
    <Root component="main">
      <Container maxWidth={false}>
        <Box display="flex">
          <Box width={240}>
            <ColumnVisibility onChange={onColumnVisibilityChange} />
          </Box>
          <Box display="flex" flex={1} height="100%">
            <DataGrid
              columns={columns}
              experimentalFeatures={{ columnGrouping: true }}
              columnGroupingModel={columnGroupingModel}
              columnVisibilityModel={columnVisibilityModel}
              onColumnVisibilityModelChange={(newModel) =>
                setColumnVisibilityModel(newModel)
              }
              rows={data}
              rowHeight={60}
              pageSize={100}
              autoHeight
              onRowClick={(params) => navigate(`/dashboard/${params.id}`)}
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
  '.MuiDataGrid-row': {
    cursor: 'pointer',
  },
  '.MuiDataGrid-root .MuiDataGrid-cell:focus, .MuiDataGrid-root .MuiDataGrid-columnHeader:focus':
    {
      outline: 'none',
    },
}));

const HeaderTitle = styled(Box)({
  fontWeight: 500,
  lineHeight: 1,
});
