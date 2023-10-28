import { Link, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterLinks } from '@/src/constants';
import FooterLinksLayout from '../Elements/FooterLinksLayout';

export default function footer() {
  return (
    <Box sx={{
      background: '#F2FCFF',
      height: '100%', width: '100%',
    }}>
      <Grid container sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mt: '0.5%',
        mb: '0.5%',
        paddingRight: '1.5%',
        paddingLeft: '1.5%',
      }}>
        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mr: '12%', ml: '4%', paddingBottom: '0.5%', paddingTop: '0.5%' }}>
          <Box>
            <Typography
              variant="h1"
              component="div"
              sx={{ display: 'flex', m: '2%', flexGrow: 1, mx: { lg: 15, md: 15, sm: 1 }, color: '#20C5FA', fontWeight: 600, fontSize: '22px', }}
            >
              Sanchit
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ display: 'flex', m: '2%', flexGrow: 1, mx: { lg: 15, md: 15, sm: 1 }, color: 'black', fontSize: '16px' }}
            >
              Front-End Developer
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '30px', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/in/sanchit-barjibhe-600aba1a7/"><LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
            <a href="https://www.instagram.com/astubborne/"><InstagramIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
            <a href="https://twitter.com/astubborne"><TwitterIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          </Box>
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: { lg: 'space-evenly', md: 'space-evenly', sm: 'space-evenly', xs: 'flex-start' }, alignContent: 'space-evenly', flexWrap: 'wrap', width: { xs: '100%', lg: 'none' } }}>

          {FooterLinks.map((group, idx) => (
            <Box sx={{ display: 'flex', height: '95%', flexDirection: { lg: 'row', xs: 'column' }, p: 2.5 }} key={idx}>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}
                >
                  {group.header}
                </Typography>
                {group.links.map((link, linkIndex) => (
                  <FooterLinksLayout
                    key={linkIndex}
                    linksTitle={link.subtitle}
                    href={link.href}
                  />
                ))}
              </Grid>
            </Box>
          ))}






          {/* {FooterLinks.map((item: any, idx: number) =>
            <FooterLinksLayout key={idx} subTitle={item.header} linksTitle={item.subTitle} href={item.href} />
          )} */}

          {/* <Box sx={{ display: 'flex', height: '95%', width: '60%', flexDirection: 'row', justifyContent: 'flex-start' }}>


            <Grid item lg={3} xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

              {FooterLinks.map((item: any, idx: number) =>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}
                >
                  {item.subtitle}
                </Typography>
              )}





              <Typography
                variant="h6"
                sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}
              >
                Web Links
              </Typography>
              <Link
                variant="h6"
                href="https://en.wikipedia.org/wiki/George_Taylor_(photographer)"
                target="_blank" rel="noopener noreferrer"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
              >
                Contact
              </Link>
              <Link
                variant="h6"
                target="_blank" rel="noopener noreferrer"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
              >
                Portfolio
              </Link>
              <Link
                variant="h6"
                href="https://medium.com/@barjibhe99"
                target="_blank" rel="noopener noreferrer"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
              >
                Blogs
              </Link>
            </Grid>
            <Grid item lg={3} xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontWeight: 'bold', fontSize: '16px' }}
              >
                Works
              </Typography>
              <Link
                href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1082011251689625079"
                variant="h6"
                target="_blank" rel="noopener noreferrer"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
              >
                Figma
              </Link>
              <Link
                variant="h6"
                target="_blank" rel="noopener noreferrer"
                href="https://github.com/Sanchitbarjibhe"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
              >
                Github
              </Link>
              <Link
                variant="h6"
                target="_blank" rel="noopener noreferrer"
                href="https://www.youtube.com/@CodeVista/featured"
                sx={{ flexGrow: 1, cursor: 'pointer', color: 'black', fontSize: '14px' }}
              >
                Youtube
              </Link>
            </Grid>
          </Box> */}
        </Grid>
      </Grid >
    </Box >

  )
}
