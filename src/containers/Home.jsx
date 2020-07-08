import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.jsx';
import '../components/Search'
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Search from '../components/Search';

const Home = ({ myList, trends, originals }) => {

    return (
        <>
            <Header />
            <Search />
            {myList.length > 0 &&
                <Categories title='mi lista'>
                    <Carousel>
                        {myList.map((item) =>
                            <CarouselItem
                                key={item.id}
                                {...item}
                                isList
                            />
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title='tendencias'>
                <Carousel>
                    {
                        trends.map(item => <CarouselItem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>

            <Categories title='originales de platzi video'>
                <Carousel>
                    {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
                </Carousel>
            </Categories>
        </>
    );
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };
};

export default connect(mapStateToProps, null)(Home);