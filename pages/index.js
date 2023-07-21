import { useEffect, useState } from 'react';
import PageNavigation from '@/Common/Elements/PageNavigation';
import About from './About'
import Banner from './Banner';
import Qualification from './Qualification';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skills from './Skills';
// import Testmonials from './Testmonials';
import { Box } from '@mui/material';

function index() {
  return (
    <Box sx={{ width: '100%' }}>
      <Banner />
      <Box>
        <PageNavigation id={'about'}>
          <About />
        </PageNavigation>

        <PageNavigation id={'qualification'}>
          <Qualification />
        </PageNavigation>

        <PageNavigation id={'skills'}>
          <Skills />
        </PageNavigation>

        <PageNavigation id={'service'}>
          <Service />
        </PageNavigation>

        <PageNavigation id={'portfolio'}>
          <Portfolio />
        </PageNavigation>

        {/* <PageNavigation id={'contact'}>
          <Contact />
        </PageNavigation> */}
      </Box>
    </Box>
  )
}

export default index;
