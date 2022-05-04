import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/information/Info';
import  Article from '../../components/articles/Articles';
import { HomeContainer } from './Home.style';


const Home = () => {
  return (
    <div>
        <HomeContainer>
          <Hero/>
          <Info/>
          <Article/>
        </HomeContainer>
    </div>
  )
}

export default Home