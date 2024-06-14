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
import Testimonials  from '../component/Testimonials'
import TestimonialsParticipants from "../component/TestimonialsParticipants"
import CoachSection from '../component/CoachSection'
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
      <Testimonials/>
      <TestimonialsParticipants/>
    <CoachSection/>
    </div>
  );
};

export default Home;
