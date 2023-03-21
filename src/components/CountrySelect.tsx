import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAppSelector } from '../redux/hooks';
import { getCountriesListSelector } from '../redux/countries/selectors';
import { Country } from '../redux/countries/types';
import { defualtEmptyCountry } from '../redux/constans';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })

export const CountrySelect: React.FC = () => {
    const countriesList: Country[] = useAppSelector(getCountriesListSelector);
    const [selectedCountry, setSelectedCountry] = useState(defualtEmptyCountry);
    const navigate = useNavigate();

    const onSelectCountry = (value: Country) => {
        setSelectedCountry(value);
    }

  return (
    <>
    <Container>
      <Row>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countriesList}
          autoHighlight
          onChange={(event, value) => onSelectCountry(value || countriesList[0])}
          getOptionLabel={(country) => country.name}
          renderOption={(props, country) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={country.flag}
                srcSet={''}
                alt=""
              />
              {country.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Row>
    </Container>
    {selectedCountry.name !=="" &&
      <Container>
        <Row>
          <Row>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                  <Img alt={selectedCountry.name} src={selectedCountry.flag} />
              </Grid>
            </Grid>
          </Row>
            <Row>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Item onClick={() => navigate(`/details/${selectedCountry.name}`)}>{selectedCountry.name}</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>{selectedCountry.capital}</Item>
                  </Grid>      
                </Grid>
              </Row>
            </Row>
          </Container>
        }
  </>
  );
}

