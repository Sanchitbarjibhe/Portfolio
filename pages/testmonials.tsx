import { Avatar, Box, Grid, Typography, Rating } from '@mui/material'
import * as React from 'react';
import { Testmonials_OBJs } from '@/src/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubHeader from '@/Common/Elements/SubHeader';
import 'swiper/css';

export default function Testmonials() {
  const [data, setData] = React.useState(Testmonials_OBJs);
  const UpdateRating = (itemId: any, newRating: any) => {
    const updatedData = data.map(item => {
      if (item.id === itemId) {
        return { ...item, rating: newRating };
      }
      return item;
    })
    setData(updatedData)
  }
  return (
    <Box>
      <SubHeader>TESTMONIALS</SubHeader>
      <Grid container sx={{ mt: 8, height: '300px', width: '90%', display: 'flex', flexDirection: { lg: 'row', sm: 'column' }, justifyContent: 'center' }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={2} >
          {Testmonials_OBJs.map((item: any, idx: number) =>
            <SwiperSlide key={idx}>
              <Box sx={{
                display: 'flex',
                padding: '6%',
                mt: 6,
                ml: 24,
                boxShadow: 16,
                flexDirection: 'column',
                borderRadius: '10px',
                background: 'white',
                width: '352px',
                height: ' 140px'
              }}>
                <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Grid item lg={3.5}>
                    <Avatar sx={{ width: 48, height: 48 }} src={item.ImgUrl}></Avatar>
                  </Grid>
                  <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ display: 'flex', flexDirection: 'row' }}>{item.Name}</Typography>
                    <Typography variant='subtitle2' sx={{ display: 'flex', flexDirection: 'row' }}>{item.Type}</Typography>
                  </Grid>
                  <Grid item lg={2} sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={item?.Rating} readOnly />
                    </Box>
                  </Grid>
                </Box>
                <Grid item lg={12} sx={{ mt: '20px' }}>
                  {item.Description}
                </Grid>

              </Box>
            </SwiperSlide>
          )}
        </Swiper>
      </Grid >
    </Box >
  )
}