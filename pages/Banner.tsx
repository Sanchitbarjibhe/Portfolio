import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Typography, Grid, Avatar } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function banner() {
  return (
    <>
      <Grid container sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { lg: 'row', md: 'row', sm: 'grid', xs: 'column' },
        justifyContent: 'center',
        background: '#F2FCFF',
        // background: 'aqua',
        height: '490px',
        mt: { lg: 0, xs: 5 }
      }}>

        <Grid item lg={0.5} md={0.6} sm={1} xs={0} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '30px',
          fontSize: '30%'
        }}>
          <a href="https://www.linkedin.com/in/sanchit-barjibhe-600aba1a7/"><LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          <a href="https://www.instagram.com/astubborne/"><TwitterIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          <a href="https://github.com/SanchitDev47"><GitHubIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
        </Grid>
        <Grid item lg={7.2} md={7} sm={9} xs={12} sx={{
          display: 'flex',
          width: { md: '100%', sm: '100%', xs: '55%' },
          alignItems: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' },
          textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' },
          flexDirection: 'column',
          fontSize: '64px',
          flexWrap: 'nowrap',
          mt: { lg: 0, md: 0, sm: 0, xs: '131px' }

        }}>
          <Typography sx={{
            paddingBottom: '5px',
            color: 'black',
            fontSize: { lg: '100%', md: '80%', sm: '70%', xs: '60%' },
            fontWeight: 600
          }}>Hi, <Typography component='span' sx={{
            fontWeight: 600,
            fontSize: { lg: '100%', md: '80%', sm: '70%', xs: '60%' },
            color: '#20C5FA'
          }}>I'm Sanchit</Typography></Typography>
          <Typography sx={{
            paddingBottom: '10px',
            fontWeight: 600,
            fontSize: { lg: '40%', md: '30%', xs: '30%' },
            color: 'black'
          }}>
            FrontEnd Develeoper
            {/* <TypewriterComponent typewriterOptions={typewriterOptions} /> */}
          </Typography>

          <Typography variant='caption' sx={{
            paddingBottom: '30px',
            width: { lg: '50%', md: '50%', sm: '50%', xs: '94%', },
            fontSize: { lg: '30%', xs: '26%' },
            color: 'black',
            flexWrap: 'wrap'
          }}>
            Highly motiveated desgin and developement producing a quality work
          </Typography>
          <Grid item lg={12} xs={12}>
            <ContactBtn>Contact Me<SendIcon sx={{
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'flex-end'
            }} /></ContactBtn>
          </Grid>
        </Grid>

        {/* Banner Avatar */}
        <Grid item lg={2.2} md={2} sm={3.5} xs={1} sx={{
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          flexWrap: 'nowrap'
        }}>
          {/* <Avatar className={classes.avatar}>
            <Image
              src={myImage}
              alt=""
              width={250}
              height={250}
              quality={100}
            />
          </Avatar> */}
        </Grid>
      </Grid>
    </>
  )
}

const ContactBtn = styled.button`
  display: flex;
  background: #20C5FA;
  color: white;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  height: 53px;
  padding: 0;
  justify-content: space-evenly;
  width: 156px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  &:hover{
  }
`;