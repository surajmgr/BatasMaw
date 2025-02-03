import React from 'react';
import Header from './Header';

import './home.css';
import ProductOwl from './ProductOwl';
import ControlledCarousel from './ControlledCarousel';

const Home = () => {
    return (
        <>
        {/* <Header /> */}
        <div className="viewport">
            <section className="home-banner">
            <ControlledCarousel />
            </section>
            <section className="home-products">
                <ProductOwl />
            </section>
        </div>
        </>
    );
};

export default Home;