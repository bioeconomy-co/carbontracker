import React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { ReactComponent as LogoSvg } from '../assets/logo.svg';

export default function Navbar() {
  return (
    <Root>
      <Container maxWidth={false}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Link href="/">
            <LogoSvg display="block" height={48} />
          </Link>
          <Typography variant="h1" fontSize={28} fontWeight={700}>
            Carbon Tracker
          </Typography>
        </Stack>
      </Container>
    </Root>
  );
}

const Root = styled('header')(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
}));
