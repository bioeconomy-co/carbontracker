import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import {
  Sparklines,
  // SparklinesLine,
  // SparklinesSpots,
  SparklinesCurve,
} from 'react-sparklines';

const SparklineTooltip = ({ row, field, colDef, enabled, children }) => {
  const theme = useTheme();

  if (!children) {
    return null;
  }

  if (!enabled) {
    return children;
  }

  const key = field.substring(6);
  const currYear = field.substring(2, 6);
  const data = [
    { key: '2020', value: row[`fp2020${key}`] },
    { key: '2021', value: row[`fp2021${key}`] },
    { key: '2022', value: row[`fp2022${key}`] },
  ].filter((d) => !!d.value);
  const sparkData = data.map((d) => d.value);
  const legend = data.map((d) => d.key);

  return (
    <Tooltip
      title={
        <Sparkline
          data={sparkData}
          legend={legend}
          activeYear={currYear}
          color={theme.palette.primary.main}
          company={row.company}
          fieldName={colDef.headerName}
        />
      }
      componentsProps={{
        tooltip: {
          sx: {
            p: 1,
            bgcolor: 'background.surface.main',
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.shadows[4],
          },
        },
      }}
      enterDelay={250}
      followCursor
    >
      {children}
    </Tooltip>
  );
};

const Sparkline = ({
  data = [],
  legend,
  activeYear,
  color,
  company,
  fieldName,
}) => (
  <Box width={180}>
    <Typography
      textAlign="center"
      variant="overline"
      lineHeight={1}
      component="span"
      pb={10}
    >
      <strong>{company}</strong>
      <br />
      {fieldName}
    </Typography>
    <Sparklines data={data} margin={12}>
      <SparklinesCurve color={color} style={{ strokeWidth: 3 }} />
      {/* <SparklinesSpots size={4} style={{ fill: color }} /> */}
    </Sparklines>
    <Stack direction="row" justifyContent="space-between" mt={-0.5}>
      {legend.map((key) => (
        <Box
          key={key}
          mx={0.5}
          color={key === activeYear ? 'primary.main' : ''}
        >
          {key}
        </Box>
      ))}
    </Stack>
  </Box>
);

export default SparklineTooltip;
