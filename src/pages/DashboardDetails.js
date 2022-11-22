import React from 'react';
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

import data from '../data.json';

export default function DashboardDetails() {
  const params = useParams();
  const item = data.find((d) => d.id === params.id);
  // console.log('item', item);

  const chartData = [
    {
      name: '2020',
      s1: item.fp2020scope1,
      s2location: item.fp2020scope2location,
      s2market: item.fp2020scope2market,
      s3: item.fp2020scope3,
      s12location: item.fp2020scope12location,
      s12market: item.fp2020scope12market,
      totalLocation: item.fp2020total,
      totalMarket: item.fp2020offset,
    },
    {
      name: '2021',
      s1: item.fp2021scope1,
      s2location: item.fp2021scope2location,
      s2market: item.fp2021scope2market,
      s3: item.fp2021scope3,
      s12location: item.fp2021scope12location,
      s12market: item.fp2021scope12market,
      totalLocation: item.fp2021total,
      totalMarket: item.fp2021offset,
    },
    {
      name: '2022',
      s1: item.fp2022scope1,
      s2location: item.fp2022scope2location,
      s2market: item.fp2022scope2market,
      s3: item.fp2022scope3,
      s12location: item.fp2022scope12location,
      s12market: item.fp2022scope12market,
      totalLocation: item.fp2022total,
      totalMarket: item.fp2022offset,
    },
  ];

  return (
    <Root>
      <Container>
        <Box height={450}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="s1"
                stroke="#8884d8"
                // activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="s2location" stroke="#82ca9d" />
              <Line type="monotone" dataKey="s2market" stroke="#ffc658" />
              <Line type="monotone" dataKey="s3" stroke="#FF8042" />
              <Line type="monotone" dataKey="s12location" stroke="#0088FE" />
              <Line type="monotone" dataKey="s12market" stroke="#a4de6c" />
              <Line type="monotone" dataKey="totalLocation" stroke="#8dd1e1" />
              <Line type="monotone" dataKey="totalMarket" stroke="#d0ed57" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
}));
