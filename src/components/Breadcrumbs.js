import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Container>
      <MuiBreadcrumbs mb={4}>
        {breadcrumbs.map(({ breadcrumb, match }, index) =>
          index < breadcrumbs.length - 1 ? (
            <Link
              key={match.pathname}
              href={match.pathname}
              color="inherit"
              underline="hover"
            >
              {breadcrumb}
            </Link>
          ) : (
            <Typography key={match.pathname} color="text.primary">
              {breadcrumb}
            </Typography>
          )
        )}
      </MuiBreadcrumbs>
    </Container>
  );
}
