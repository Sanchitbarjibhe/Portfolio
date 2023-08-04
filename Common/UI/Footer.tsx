import { Typography, Box, Grid, Link, Paper } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function footer() {
  return (
    <Box sx={{
      background: '#F2FCFF',
      height: '300px', width: '100%',
    }}>
      <Grid container sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mt: '1%',
        mb: '1%',
        paddingRight: '1.5%',
        paddingLeft: '1.5%',
      }}>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mr: '6%', ml: '6%', paddingBottom: '1.5%', paddingTop: '1.5%' }}>
          <Box>
            <Typography
              variant="h1"
              component="div"
              sx={{ display: 'flex', flexGrow: 1, mx: { lg: 15, md: 15, sm: 1 }, color: '#20C5FA', fontWeight: 600, fontSize: '22px', }}
            >
              Sanchit
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ display: 'flex', flexGrow: 1, mx: { lg: 15, md: 15, sm: 1 }, color: 'black', fontSize: '16px' }}
            >
              Front-End Developer
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '30px' }}>
            <a href="https://www.linkedin.com/in/sanchit-barjibhe-600aba1a7/"><LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
            <a href="https://www.instagram.com/astubborne/"><InstagramIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
            <a href="https://twitter.com/astubborne"><TwitterIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          </Box>
        </Grid>
        <Grid item sx={{ display: 'flex', mt: '1%', justifyContent: 'center', width: '100%', alignContent: 'space-evenly' }}>
          <Box sx={{ display: 'flex', height: '95%', width: '60%', flexDirection: 'row', justifyContent: 'flex-start' }}>


            <Grid item lg={3} xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}
              >
                Web Links
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontSize: '14px' }}
              >
                Contact
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontSize: '14px' }}
              >
                Portfolio
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontSize: '14px' }}
              >
                Blogs
              </Typography>
            </Grid>
            <Grid item lg={3} xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}
              >
                Works
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontSize: '14px' }}
              >
                Figma
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontSize: '14px' }}
              >
                Github
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontSize: '14px' }}
              >
                Youtube
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid >
    </Box >

  )
}
