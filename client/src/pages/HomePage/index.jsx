import React from 'react'
import './homePage.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/Header';
import RegisterSection from '../../components/RegisterSection';
import StudentsSection from '../../components/StudentsSection';
import UpcomingSection from '../../components/UpcomingSection/iindex';
import OurServicesSection from '../../components/OurServicesSection';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import ContactSection from '../../components/ContactSection';

function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Barrister</title>
      </Helmet>
      <Navbar />
      <div id="Home">
        <Header />
      </div>
      <div id="About">
        <RegisterSection />
      </div>
      <div id="Service">
        <UpcomingSection />
      </div>
      <div id="News">
        <StudentsSection />
      </div>
      <div id="Contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default HomePage