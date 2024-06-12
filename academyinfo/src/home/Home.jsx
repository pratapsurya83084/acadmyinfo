import React from "react";
import Heading from "../component/Heading";
import Workshop from "../component/Workshop";
import TimeEnroll  from "../component/TimeEnroll"
import FeaturedSlider   from "../component/Newsfeature"
import BuisnessChange   from '../component/BuisnessChange'
const Home = () => {
  return (
    <div>
      <Heading />
      <Workshop />
      <TimeEnroll/>
      <FeaturedSlider/>
      <BuisnessChange/>
    </div>
  );
};

export default Home;
