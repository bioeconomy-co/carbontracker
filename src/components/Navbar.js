import React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import LogoSvg from '../assets/logo.svg';

export default function Navbar() {
  return (
    <Root>
      <Container>
        <Typography variant="h1">Carbon Tracker</Typography>
      </Container>
    </Root>
  );
}

const Root = styled('header')(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));
