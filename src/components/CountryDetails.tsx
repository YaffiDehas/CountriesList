import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Country } from '../redux/countries/types';
import { useAppSelector } from '../redux/hooks';
import { getCountriesListSelector } from '../redux/countries/selectors';


export const CountryDetails: React.FC = () => {
    const { countryName } = useParams();
    const navigate = useNavigate();
    const countriesList: Country[] = useAppSelector(getCountriesListSelector);
    const selectedCountry: Country = countriesList.filter(country => country.name === countryName)[0];

    const redirectToHomePage = () => {
        navigate('/');
    }
    
  return (
    <Container>
        <Row className='justify-content-center mt-5'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={selectedCountry.flag}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {selectedCountry.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {selectedCountry.capital}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {selectedCountry.currencies && selectedCountry.currencies[0].name} 0.00{selectedCountry.currencies && selectedCountry.currencies[0].symbol}
                    </Typography>
                </CardContent>
            </Card>
        </Row>
        <Button type="button" onClick={() => redirectToHomePage()}>back</Button>
    </Container>
  );
}