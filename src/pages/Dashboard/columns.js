import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

const HeaderTitle = styled(Box)({
  fontWeight: 500,
  lineHeight: 1,
});

// const diffFormatter = (params) => {
//   // console.log('------', params);
//   if (!params.value) {
//     return '';
//   }
//   return params.value > 0 ? `+${params.value}` : `-${params.value}`;
// };

const numberFormatter = Intl.NumberFormat();

// const renderDiffCell = ({ value, formattedValue }) => {
//   // console.log('v', value, formattedValue);
//   if (!formattedValue) {
//     return null;
//   }
//   return (
//     <Box color={value > 0 ? 'error.main' : 'success.main'}>
//       {formattedValue > 0 ? `+${formattedValue}` : formattedValue}
//     </Box>
//   );
// };

const Difference = ({ value }) => {
  if (!value) {
    return null;
  }
  const formattedValue = numberFormatter.format(value);
  // console.log(value, formattedValue);
  return (
    <Box color={value > 0 ? 'error.main' : 'success.main'}>
      {value > 0 ? `+${formattedValue}` : formattedValue}
    </Box>
  );
};

const renderCell = ({ row, field, formattedValue, colDef, ...rest }) => {
  // console.log('renderCell', { row, field, formattedValue, ...rest });
  return (
    <Stack alignItems="flex-end">
      {formattedValue}
      {colDef._showDiffs && <Difference value={row[`${field}_diff`]} />}
    </Stack>
  );
};

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
  //   headerName: 'S1 (diff)',
  //   type: 'number',
  //   hide: true,
  //   // valueFormatter: diffFormatter,
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

const columnGroupingModel = [
  {
    groupId: '2022',
    children: [
      { field: 'fp2022scope1' },
      { field: 'fp2022scope1_diff' },
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

export { columns, columnGroupingModel };
