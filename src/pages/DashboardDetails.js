import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import ColumnVisibility from '../components/ColumnVisibility';
import { columns } from './Dashboard/columns';
import data from '../data.json'; // TODO: tabs with various data jsons

const colors = [
  '#82ca9d',
  '#FF8042',
  '#FFC658',
  '#a4de6c',
  '#44a8ff',
  '#a583f3',
  '#ED6D87',
  '#d0ed57',
  '#8dd1e1',
];

export default function DashboardDetails() {
  const params = useParams();
  const item = data.find((d) => d.id === params.id);
  // console.log('item', item);

  const chartData = [
    {
      name: '2020',
      scope1: item.fp2020scope1,
      scope2location: item.fp2020scope2location,
      scope2market: item.fp2020scope2market,
      scope3: item.fp2020scope3,
      scope12location: item.fp2020scope12location,
      scope12market: item.fp2020scope12market,
      totallocation: item.fp2020totallocation,
      totalmarket: item.fp2020totalmarket,
      offset: item.fp2020offset,
    },
    {
      name: '2021',
      scope1: item.fp2021scope1,
      scope2location: item.fp2021scope2location,
      scope2market: item.fp2021scope2market,
      scope3: item.fp2021scope3,
      scope12location: item.fp2021scope12location,
      scope12market: item.fp2021scope12market,
      totallocation: item.fp2021totallocation,
      totalmarket: item.fp2021totalmarket,
      offset: item.fp2021offset,
    },
    {
      name: '2022',
      scope1: item.fp2022scope1,
      scope2location: item.fp2022scope2location,
      scope2market: item.fp2022scope2market,
      scope3: item.fp2022scope3,
      scope12location: item.fp2022scope12location,
      scope12market: item.fp2022scope12market,
      totallocation: item.fp2022totallocation,
      totalmarket: item.fp2022totalmarket,
      offset: item.fp2022offset,
    },
  ];

  const lines = [
    {
      dataKey: 'scope1',
      name: 'S1',
    },
    {
      dataKey: 'scope2location',
      name: 'S2 Location',
    },
    {
      dataKey: 'scope2market',
      name: 'S2 Market',
    },
    {
      dataKey: 'scope3',
      name: 'S3',
    },
    {
      dataKey: 'scope12location',
      name: 'S1&2 Location',
    },
    {
      dataKey: 'scope12market',
      name: 'S1&2 Market',
    },
    {
      dataKey: 'totallocation',
      name: 'Total Location',
    },
    {
      dataKey: 'totalmarket',
      name: 'Total Market',
    },
    {
      dataKey: 'offset',
      name: 'Offset',
    },
  ];

  const [columnVisibilityModel, setColumnVisibilityModel] = useState(
    columns.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.field]: true,
      }),
      {}
    )
  );

  const onColumnVisibilityChange = useCallback((state) => {
    setColumnVisibilityModel(state);
  }, []);

  return (
    <Root>
      <Container maxWidth={false}>
        <Box display="flex" mt={6}>
          <Box width={320}>
            <ColumnVisibility onChange={onColumnVisibilityChange} />
          </Box>
          <Box display="flex" flex={1} height={450}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {lines.map(
                  (lineProps, index) =>
                    columnVisibilityModel[lineProps.dataKey] && (
                      <Line
                        key={index}
                        type="monotone"
                        stroke={colors[index]}
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, stroke: '#121212', strokeWidth: 2 }}
                        {...lineProps}
                      />
                    )
                )}
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
}));
