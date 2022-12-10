import React, { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
// import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionActions from '@mui/material/AccordionActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import useLocalStorage from '../hooks/useLocalStorage';

export const fieldMap = [
  {
    field: 'scope1',
    label: 'Scope 1',
  },
  {
    field: 'scope2location',
    label: 'Scope 2 Location',
  },
  {
    field: 'scope2market',
    label: 'Scope 2 Market',
  },
  {
    field: 'scope3',
    label: 'Scope 3',
  },
  {
    field: 'scope12location',
    label: 'Scope 1 & 2 Location',
  },
  {
    field: 'scope12market',
    label: 'Scope 1 & 2 Market',
  },
  {
    field: 'totallocation',
    label: 'Total Location',
  },
  {
    field: 'totalmarket',
    label: 'Total Market',
  },
  {
    field: 'offset',
    label: 'Offset',
  },
];

const initialState = fieldMap.reduce(
  (acc, curr) => ({ ...acc, [curr.field]: true }),
  {}
);

export default function ColumnVisibility({
  onChange,
  onToggleDiffs,
  onToggleTrends,
}) {
  const [state, setState] = useLocalStorage('showColumns', initialState);
  const [showDiffs, setShowDiffs] = useLocalStorage('showDiffs', false);
  const [showTrends, setShowTrends] = useLocalStorage('showTrends', true);

  useEffect(() => {
    onChange?.(state);
    onToggleDiffs?.(showDiffs, state);
    onToggleTrends?.(showTrends);
    // eslint-disable-next-line
  }, []);

  const handleChange = useCallback(
    (event) => {
      const newState = {
        ...state,
        [event.target.name]: event.target.checked,
      };
      setState(newState);
      onChange?.(newState);
    },
    [state, setState, onChange]
  );

  const toggleAll = useCallback(
    (value) => {
      const newState = {
        ...Object.keys(initialState).reduce(
          (acc, key) => ({ ...acc, [key]: value }),
          {}
        ),
      };
      setState(newState);
      onChange?.(newState);
    },
    [setState, onChange]
  );

  const toggleDiffs = useCallback(
    (event) => {
      setShowDiffs(event.target.checked);
      onToggleDiffs?.(event.target.checked, state);
    },
    [setShowDiffs, onToggleDiffs, state]
  );

  const toggleTrends = useCallback(
    (event) => {
      setShowTrends(event.target.checked);
      onToggleTrends?.(event.target.checked);
    },
    [setShowTrends, onToggleTrends]
  );

  return (
    <Root>
      <Accordion
        defaultExpanded
        disableGutters
        variant="outlined"
        sx={{ bgcolor: 'background.surface.dark' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Columns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" variant="standard">
            {/* <FormLabel component="legend" p={0}>
              Show columns
            </FormLabel> */}
            <FormGroup>
              {fieldMap.map(({ field, label }) => (
                <FormControlLabel
                  key={field}
                  label={label}
                  control={
                    <Switch
                      checked={state[field]}
                      onChange={handleChange}
                      name={field}
                    />
                  }
                />
              ))}
            </FormGroup>
          </FormControl>
          <Stack direction="row" spacing={2} mt={1}>
            <Button size="small" onClick={() => toggleAll(true)}>
              Show all
            </Button>
            <Button size="small" onClick={() => toggleAll(false)}>
              Hide all
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      {onToggleDiffs && (
        <Accordion
          defaultExpanded
          disableGutters
          variant="outlined"
          sx={{
            bgcolor: 'background.surface.dark',
            borderTop: 'none',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Differences</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  label={'Show differences'}
                  control={
                    <Switch
                      checked={showDiffs}
                      onChange={toggleDiffs}
                      name={'showDiffs'}
                    />
                  }
                />
                <FormControlLabel
                  label={'Show trends'}
                  control={
                    <Switch
                      checked={showTrends}
                      onChange={toggleTrends}
                      name={'showTrends'}
                    />
                  }
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      )}
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(4),
  '.MuiFormLabel-root.Mui-focused': {
    color: theme.palette.text.secondary,
  },
}));
