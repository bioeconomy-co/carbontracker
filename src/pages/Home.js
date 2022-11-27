import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Root>
      <Container>Home</Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({}));
