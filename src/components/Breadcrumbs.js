import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import data from '../data.json';

export default function Breadcrumbs() {
  const companies = groupById(data);

  const breadcrumbs = useBreadcrumbs([
    {
      path: '/dashboard/:id',
      breadcrumb: ({ match }) => {
        return companies[match.params.id].company;
      },
    },
  ]);

  return (
    <Container maxWidth={false}>
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

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
