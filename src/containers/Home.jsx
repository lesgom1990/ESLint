import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../components/Search'
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import Search from '../components/Search';
import useInitialState from '../hooks/useInitialState.js'

const API = 'http://localhost:3000/initialState';

const Home = () => {

    const initialState = useInitialState(API);

    return (
        <>
            <Search />
            {initialState.mylist?.length > 0 &&
                <Categories title='mi lista'>
                    <Carousel>
                    {initialState.mylist?.map((item) => <CarouselItem key={item.id} {...item} />)}
                    </Carousel>
                </Categories>
            }

            <Categories title='tendencias'>
                <Carousel>
                    {
                        initialState.trends?.map(item =><CarouselItem key = {item.id} {...item} />) 
                    }
                </Carousel>
            </Categories>

            <Categories title='originales de platzi video'>
                <Carousel>
                {initialState.originals?.map((item) => <CarouselItem key={item.id} {...item} />)}
                </Carousel>
            </Categories>
        </>
    );
};

export default Home;
