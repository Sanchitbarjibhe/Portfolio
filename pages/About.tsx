import React from 'react'
import styled from 'styled-components';
import { Box, Grid, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';
import SubHeader from '@/Common/Elements/SubHeader';

export default function about() {
  const downloadCvUrl = 'https://portfolio-sanchitbarjibhe.vercel.app/SanchitBarjibhe.pdf';

  // const downloadCvEvent = (Url: string) => {
  //   const fileName: string = Url.split('/').pop() || '';
  //   const createTag = document.createElement('a');
  //   createTag.href = Url;
  //   createTag.setAttribute('download', fileName);
  //   document.body.appendChild(createTag)
  //   createTag.click();
  //   createTag.remove();
  // }
  return (
    <Box>
      <SubHeader>ABOUT ME</SubHeader>
      <Grid container sx={{ paddingTop: '50px', paddingBottom: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '5%' }}>
        <Box
          component="img"
          sx={{
            borderRadius: '9px',
            border: 'black',
            boxShadow: '3px 39px 72px rgba(111, 194, 240, 0.2)',
            width: { lg: '371px', md: '344px', xs: '330px' },
            height: { lg: '193px', md: '219px', xs: '193px' },
          }}
          alt="The house from the offer."
          src="#"
        />
        <Grid item lg={3} md={5} sm={4} xs={9} sx={{ display: 'flex', height: '90%', width: { lg: '30%', xs: '50%' }, flexDirection: 'column', mt: { lg: 0, md: 0, sm: '0px', xs: '30px' }, alignItems: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' }, textAlign: { lg: 'left', md: 'center', sm: 'center', xs: 'center' }, justifyContent: 'flex-end' }}>
          <Grid item sx={{ display: 'flex', width: '100%', height: '90%' }}>
            <Typography variant='body1' sx={{ fontSize: '18px' }}>
              Web Developer with extensive knowledge the
              year of experiance,working in web technology
              and UI /UX delivering quality work</Typography>
          </Grid>

          <Grid item sx={{ mt: 3.4, ml: 0, mr: 0, mb: 5, display: 'flex', justifyContent: 'space-between', gap: '30px', alignItems: 'flex-start', width: '92%', }}>
            <Grid sx={{ display: 'flex', width: '20%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
              <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
              Years
              Experience
            </Grid>
            <Grid sx={{ display: 'flex', width: '20%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
              <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
              completed
              Project
            </Grid>
            <Grid sx={{ display: 'flex', width: '20%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
              <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
              company
              worked
            </Grid>
          </Grid>
          <Box>
            <CvBtn>Download CV <DownloadIcon sx={{ fontSize: '19px' }} /></CvBtn>
            {/* <CvBtn onClick={() => downloadCvEvent(downloadCvUrl)}>Download CV <DownloadIcon sx={{ fontSize: '19px' }} /></CvBtn> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}


const CvBtn = styled.button`
      display: flex;
      background: #20C5FA;
      color: white;
      border-radius: 8px;
      border: none;
      display: flex;
      cursor: pointer;
      font-size: 14.1px;
      align-items: center;
      height: 42px;
      width: 149px;
      padding: 0;
      justify-content: space-evenly;
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
      &:hover{
      }
      `;