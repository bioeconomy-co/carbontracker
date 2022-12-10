import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

import SparklineTooltip from './SparklineTooltip';
import { fieldMap } from '../../components/ColumnVisibility';

const years = ['2022', '2021', '2020'];
const numberFormatter = Intl.NumberFormat();

function renderCell(params) {
  return <GridCell {...params} />;
}

const GridCell = (props) => {
  const { row, field, formattedValue, colDef } = props;
  return (
    <SparklineTooltip
      row={row}
      field={field}
      colDef={colDef}
      enabled={colDef._showTrends}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        {formattedValue}
        {/* {colDef._showDiffs && <Difference value={row[`${field}_diff`]} />} */}
      </Box>
    </SparklineTooltip>
  );
};

const renderDiffCell = ({ row, field, value, colDef }) => {
  if (!value) {
    return null;
  }
  return (
    <SparklineTooltip
      row={row}
      field={field.slice(0, -5)}
      colDef={colDef}
      enabled={colDef._showTrends}
    >
      <Box>
        <Difference value={value} />
      </Box>
    </SparklineTooltip>
  );
};

const Difference = ({ value }) => {
  if (!value) {
    return null;
  }
  const formattedValue = numberFormatter.format(value);
  return (
    <Box color={value > 0 ? 'error.main' : 'success.main'}>
      {value > 0 ? `+${formattedValue}` : formattedValue}
    </Box>
  );
};

const HeaderTitle = styled(Box)({
  fontWeight: 500,
  lineHeight: 1,
  textAlign: 'right',
});

const columns = [
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
    renderCell,
  },
  // {
  //   field: 'fp2022scope1_diff',
  //   headerName: 'vs. 2021',
  //   renderCell: renderDiffCell,
  // },
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
    renderCell,
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
    renderCell,
  },
  {
    field: 'fp2022scope3',
    headerName: 'Scope 3',
    type: 'number',
    renderCell,
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
    renderCell,
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
    renderCell,
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
    renderCell,
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
    renderCell,
  },
  {
    field: 'fp2022offset',
    headerName: 'Offset',
    type: 'number',
    renderCell,
  },
  {
    field: 'fp2021scope1',
    headerName: 'Scope 1',
    type: 'number',
    renderCell,
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
    renderCell,
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
    renderCell,
  },
  {
    field: 'fp2021scope3',
    headerName: 'Scope 3',
    type: 'number',
    renderCell,
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
    renderCell,
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
    renderCell,
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
    renderCell,
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
    renderCell,
  },
  {
    field: 'fp2021offset',
    headerName: 'Offset',
    type: 'number',
    renderCell,
  },
  {
    field: 'fp2020scope1',
    headerName: 'Scope 1',
    type: 'number',
    renderCell,
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
    renderCell,
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
    renderCell,
  },
  {
    field: 'fp2020scope3',
    headerName: 'Scope 3',
    type: 'number',
    renderCell,
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
    renderCell,
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
    renderCell,
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
    renderCell,
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
    renderCell,
  },
  {
    field: 'fp2020offset',
    headerName: 'Offset',
    type: 'number',
    renderCell,
  },
];

function createColumnsWithDiffs() {
  return columns.reduce((acc, col) => {
    const currYear = +col.field.substring(2, 6);
    if (!col.field.startsWith('fp') || currYear === 2020) {
      return [...acc, col];
    }
    return [
      ...acc,
      col,
      {
        field: `${col.field}_diff`,
        headerName: `vs. ${currYear - 1}`,
        renderCell: renderDiffCell,
      },
    ];
  }, []);
}

const columnGroupingModel = [
  {
    groupId: '2022',
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

function createColumnGroupModelWithDiffs() {
  return years.map((year) => ({
    groupId: year,
    children: fieldMap.reduce((acc, f) => {
      acc.push({ field: `fp${year}${f.field}` });
      acc.push({ field: `fp${year}${f.field}_diff` });
      return acc;
    }, []),
  }));
}

export {
  columns,
  createColumnsWithDiffs,
  columnGroupingModel,
  createColumnGroupModelWithDiffs,
};
