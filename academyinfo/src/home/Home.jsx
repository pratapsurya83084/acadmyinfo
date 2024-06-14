import React from "react";
import Heading from "../component/Heading";
import Workshop from "../component/Workshop";
import TimeEnroll  from "../component/TimeEnroll"
import FeaturedSlider   from "../component/Newsfeature"
import BuisnessChange   from '../component/BuisnessChange'
import RealLifeBuissness from '../component/RealLifeBuissness'
import SeminarSection from "../component/SeminarSection"
import LearnInFourHour from '../component/LearnInFourHour'
import BonusSection  from '../component/BonusSection'
import StruggleDecisions  from '../component/StruggleDecisions'
const Home = () => {
  return (
    <div>
      <Heading />
      <Workshop />
      <TimeEnroll/>
      <FeaturedSlider/>
      <BuisnessChange/>
      <RealLifeBuissness/>
      <SeminarSection/>
      <LearnInFourHour/>
      <BonusSection/>
      <StruggleDecisions/>
    </div>
  );
};

export default Home;
