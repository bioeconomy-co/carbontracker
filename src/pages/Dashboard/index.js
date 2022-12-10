import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import ColumnVisibility from '../../components/ColumnVisibility';

import { tabs } from './tabs';
import {
  createColumnsWithDiffs,
  createColumnGroupModelWithDiffs,
} from './columns';

const columns = createColumnsWithDiffs();
console.log('columns', columns);
const columnGroupingModel = createColumnGroupModelWithDiffs();
console.log('columnGroupingModel', columnGroupingModel);

export default function Dashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [rows, setRows] = useState(tabs[tab].data);
  const [showTrends, setShowTrends] = useState(true);

  const onChangeTab = (event, newValue) => {
    setTab(newValue);
    setRows(tabs[newValue].data);
  };

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

  const onToggleDiffs = useCallback(
    (checked, state) => {
      setColumnVisibilityModel(
        Object.keys(state).reduce(
          (acc, key) => ({
            ...acc,
            [`fp2022${key}_diff`]: checked,
            [`fp2021${key}_diff`]: checked,
            [`fp2020${key}_diff`]: checked,
          }),
          {}
        )
      );
    },
    [setColumnVisibilityModel]
  );

  const onToggleTrends = useCallback(
    (checked) => {
      setShowTrends(checked);
      // setColumnVisibilityModel(
      //   Object.keys(state).reduce(
      //     (acc, key) => ({
      //       ...acc,
      //       [`fp2022${key}_diff`]: checked,
      //       [`fp2021${key}_diff`]: checked,
      //       [`fp2020${key}_diff`]: checked,
      //     }),
      //     {}
      //   )
      // );
    },
    [setShowTrends]
  );

  return (
    <Root component="main">
      <Container
        maxWidth={false}
        sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
      >
        <Box
          display="flex"
          flex={1}
          position="absolute"
          px={3}
          sx={{ inset: 0 }}
        >
          <Box width={320} mt={6} overflow="auto">
            <ColumnVisibility
              onChange={onColumnVisibilityChange}
              onToggleDiffs={onToggleDiffs}
              onToggleTrends={onToggleTrends}
            />
          </Box>
          <Box display="flex" flexDirection="column" flex={1} mb={4}>
            <Tabs value={tab} onChange={onChangeTab} variant="scrollable">
              {tabs.map((t, i) => (
                <Tab key={i} value={i} label={t.name} />
              ))}
            </Tabs>
            <DataGrid
              columns={columns.map((c) => ({ ...c, _showTrends: showTrends }))}
              disableColumnMenu={true}
              experimentalFeatures={{ columnGrouping: true }}
              columnGroupingModel={columnGroupingModel}
              columnVisibilityModel={columnVisibilityModel}
              onColumnVisibilityModelChange={(newModel) =>
                setColumnVisibilityModel(newModel)
              }
              rows={rows}
              rowHeight={60}
              onRowClick={(params) => navigate(`/dashboard/${params.id}`)}
              pageSize={100}
              // autoPageSize
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
