import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Header } from './Header';
import {CountrySelect} from './CountrySelect';
import { getLoadingSelector } from '../redux/countries/selectors';
import { LoadingState } from '../redux/constans';
import {getCountriesList} from '../redux/countries/actions';
import './style.css'


export const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(getLoadingSelector);

    useEffect(() => {
        dispatch(getCountriesList.request());
    }, [])

    return (
        <div>
            <Header />
            {loading === LoadingState.REQUEST &&
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {loading === LoadingState.SUCCESS &&
                <Container>
                   <Row className='justify-content-between mt-5'>
                        <Col>
                            <CountrySelect />
                        </Col>
                    </Row>                  
                </Container>
            }
        </div>
    )
};
