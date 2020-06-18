import React from 'react';
import Header from '../components/Header';
import '../components/Search'
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import Search from '../components/Search';


const App = () => (
    <div className="App">
        <Header />
        <Search />
        

        <Categories>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Footer />
    </div>
);

export default App;
