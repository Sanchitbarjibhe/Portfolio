import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageNavigation from '@/Common/Elements/PageNavigation';
import Banner from './Banner';
import About from './About'
import Qualification from './Qualification';
import Skills from './Skills';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
// import Testmonials from './Testmonials';

function index() {
  return (
    <Box sx={{ width: '100%' }}>
      <PageNavigation id={'banner'}>
        <Banner />
      </PageNavigation>
      <Box>
        <PageNavigation paddingTop={'65px'} id={'about'}>
          <About />
        </PageNavigation>

        <PageNavigation paddingTop={'65px'} id={'qualification'}>
          <Qualification />
        </PageNavigation>

        <PageNavigation paddingTop={'65px'} id={'skills'}>
          <Skills />
        </PageNavigation>

        <PageNavigation paddingTop={'65px'} id={'service'}>
          <Service />
        </PageNavigation>

        <PageNavigation paddingTop={'65px'} id={'portfolio'}>
          <Portfolio />
        </PageNavigation>

        <PageNavigation paddingTop={'65px'} id={'contact'}>
          <Contact />
        </PageNavigation>
      </Box>
    </Box>
  )
}

export default index;
