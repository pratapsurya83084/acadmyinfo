import React from "react";
import Heading from "../component/Heading";
import Workshop from "../component/Workshop";
import TimeEnroll  from "../component/TimeEnroll"
import FeaturedSlider   from "../component/Newsfeature"
import BuisnessChange   from '../component/BuisnessChange'
import RealLifeBuissness from '../component/RealLifeBuissness'
const Home = () => {
  return (
    <div>
      <Heading />
      <Workshop />
      <TimeEnroll/>
      <FeaturedSlider/>
      <BuisnessChange/>
      <RealLifeBuissness/>
    </div>
  );
};

export default Home;
