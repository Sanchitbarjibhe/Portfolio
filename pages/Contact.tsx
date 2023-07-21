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
    <Box>
      <SubHeader>CONTACT</SubHeader>
      <Grid container
        sx={{
          paddingTop: '50px', paddingBottom: '50px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '35%',
          gap: '62px'
        }}>

        <Grid item lg={4} sx={{ display: 'flex', flexDirection: 'column', gap: '31px', padding: { lg: 0, xs: '6%' } }}>
          <Typography sx={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: '25px' }}><PhoneIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />+91 9850589978</Typography>
          <Typography sx={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: '25px' }}><LocationOnIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />Vadodra/Broda, Gujrat</Typography>
          <Typography sx={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: '25px' }}><MailIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />sanchitbarjibhe98@gmail.com</Typography>
        </Grid>

        <Grid item lg={5} xs={3} sx={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'flex-start', gap: '30px', alignItems: { lg: 'flex-end', xs: 'center' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '30px', width: '465px' }}>
            <Grid>
              <TextField sx={{ width: '100%', }} InputLabelProps={{ shrink: true }} {...register("visitorName", { required: "First Name is Required" })} id="outlined-basic" name="FirstName" label="First Name" variant="outlined" />
              {errors.visitorName && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.visitorName.message}`}</p>}
            </Grid>
            <Grid>
              <TextField sx={{ width: '100%', }} InputLabelProps={{ shrink: true }} {...register("subject", { required: "Subject is Required" })} id="outlined-basic" name="subject" label="Suject" variant="outlined" />
              {errors.subject && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.subject.message}`}</p>}
            </Grid>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Grid>
              <TextField sx={{ width: '100%', }} InputLabelProps={{ shrink: true }} {...register("email", { required: "Email is Required" })} id="outlined-basic" name="email" label="Email" variant="outlined" />
              {errors.email && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.email.message}`}</p>}
            </Grid>

            <Grid>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message"
                minRows={3}
                name='visitorQury'
                {...register("visitorQury", { required: "Write A Message for inquiry" })}
                style={{ maxWidth: 466, minWidth: 466, maxHeight: '90px', minHeight: '90px' }}
              />
              {errors.visitorQury && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.visitorQury.message}`}</p>}
            </Grid>
          </Box>
          <Box>
            <SubmitBtn type="submit" onClick={handleSubmit(onSubmit)}>Submit</SubmitBtn>
          </Box>
        </Grid>
      </Grid>
    </Box>
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

