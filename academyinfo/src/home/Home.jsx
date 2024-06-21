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
import PictureSection from '../component/PictureSection'
import GuaranteeCashback from '../component/GuaranteeCashback'
import Promise   from '../component/Promise'
import FAQ from '../component/FAQ'
import CompanyLogo    from '../component/CompanyLogo'
import  FooterBar  from "../component/FooterBar"
import SuccessAcheive  from  '../component/SuccessAcheive'
const Home = () => {
  return (
    <div>
      <Heading />
      <Workshop />
      <TimeEnroll/>
      <FeaturedSlider/>
      <BuisnessChange/>
      <RealLifeBuissness/>
      <SuccessAcheive/>
      <SeminarSection/>
      <LearnInFourHour/>
      <BonusSection/>
      <Testimonials/>
      <TestimonialsParticipants/>
    <CoachSection/>
    <PictureSection/>
    <GuaranteeCashback/>
    <Promise/>
    <FAQ/>
    <CompanyLogo/>
    <FooterBar/>
  
    </div>
  );
};

export default Home;
