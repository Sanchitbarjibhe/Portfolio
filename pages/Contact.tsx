import { Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components';
import SubHeader from '@/Common/Elements/SubHeader';
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<any>({});

  const onSubmit = (VisitorContactData: Object) => {
    setValue('visitorname', '');
    setValue('subject', '');
    setValue('email', '');
  };
  return (
    <>
      <SubHeader>CONTACT</SubHeader>
      <Box sx={{ paddingTop: '50px', paddingBottom: '50px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', gap: { xs: '65px' } }}>

        <Grid item lg={4} sx={{ display: 'flex', flexDirection: 'column', gap: '31px' }}>
          <Typography sx={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: '15px' }}><PhoneIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />+91 9850589978</Typography>
          <Typography sx={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: '15px' }}><LocationOnIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />Vadodra/Broda, Gujrat</Typography>
          <Typography sx={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: '15px' }}><MailIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />barjibhe98@gmail.com</Typography>
        </Grid>

        <Grid item lg={5} md={5} sm={3} xs={12} sx={{
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          display: 'flex', flexDirection: 'column',
          gap: '45px', alignItems: { lg: 'flex-end', xs: 'center' }
        }}>

          <Box sx={{ display: 'flex', width: '100%', gap: '30px' }}>
            <Grid item lg={3} md={6} sm={10} xs={12}>
              <TextField InputLabelProps={{ shrink: true }} {...register("visitor", { required: "First Name is Required" })} id="outlined-basic" name="visitor" label="Full Name" variant="outlined" fullWidth />
              {errors.visitor && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.visitor.message}`}</p>}
            </Grid>
            <Grid item lg={3} md={6} sm={10} xs={12}>
              <TextField InputLabelProps={{ shrink: true }} {...register("subject", { required: "Subject is Required" })} id="outlined-basic" name="subject" label="Subject" variant="outlined" fullWidth />
              {errors.subject && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.subject.message}`}</p>}
            </Grid>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '30px' }}>
            <Grid item lg={3} md={6} sm={3} xs={12}>
              <TextField InputLabelProps={{ shrink: true }} {...register("email", { required: "Email is Required" })} id="outlined-basic" name="email" label="Email" variant="outlined" fullWidth />
              {errors.email && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.email.message}`}</p>}
            </Grid>

            <Grid item lg={3} md={6} sm={6} xs={3}>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message"
                minRows={3}
                name='visitorQury'
                {...register("visitorQury", { required: "Write A Message for inquiry" })}
                style={{ width: '100%', minWidth: 250, maxHeight: '90px', minHeight: '90px' }}
              />
              {errors.visitorQury && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.visitorQury.message}`}</p>}
            </Grid>
          </Box>
          <Box>
            <SubmitBtn type="submit" onClick={handleSubmit(onSubmit)}>Submit</SubmitBtn>
          </Box>
        </Grid>
      </Box >
    </>
  )
}

const SubmitBtn = styled.button`
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
const Error = styled.div`
  color: red;
`;

