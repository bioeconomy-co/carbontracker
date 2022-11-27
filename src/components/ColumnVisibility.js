import React, { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
// import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import useLocalStorage from '../hooks/useLocalStorage';

const fieldMap = [
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

export default function ColumnVisibility({ onChange }) {
  const [state, setState] = useLocalStorage('showColumns', initialState);

  useEffect(() => {
    onChange(state);
  }, [state, onChange]);

  const handleChange = useCallback(
    (event) => {
      const newState = {
        ...state,
        [event.target.name]: event.target.checked,
      };
      setState(newState);
      onChange(newState);
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
      onChange(newState);
    },
    [setState, onChange]
  );

  return (
    <Root>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend" p={0}>
          Show columns
        </FormLabel>
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
      <Stack direction="row" spacing={2} my={2}>
        <Button variant="outlined" size="small" onClick={() => toggleAll(true)}>
          Show all
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => toggleAll(false)}
        >
          Hide all
        </Button>
      </Stack>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  '.MuiFormLabel-root.Mui-focused': {
    color: theme.palette.text.secondary,
  },
}));
