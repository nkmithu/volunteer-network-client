import React from 'react';
import AllEvents from '../AllEvents/AllEvents';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <section>
          <div className="overlay"></div>
          <Header/>
          
            <div className="heading-container">
                <h2 className="heading">I grow by helping people in need.</h2>
                <form action="" className="search-container">
                    <input type="text" placeholder="Search..."/>
                    <input type="submit" value="Search"/>
                </form>
            </div>

            <div className="Events-container">
                <AllEvents/>
            </div>
        </section>
    );
};

export default Home;