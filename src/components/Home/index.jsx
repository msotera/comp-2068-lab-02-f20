import React from 'react';
import {Link } from 'react-router-dom'
import Header from '../shared/Header';

// You need to import your shared header...

const Home = () => {
  return (
    <>
      <Header title="Home">Home Page</Header>
      
      <button onclick='About'>About Me!</button>
      
    </>
  );
}
 
export default Home;