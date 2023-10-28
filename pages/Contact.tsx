import { Alert, Button, Grid, Snackbar, TextareaAutosize, TextField, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styled from 'styled-components';
import SubHeader from '@/Common/Elements/SubHeader';
import { SubmitHandler, useForm } from "react-hook-form";
// import CircularIntegration from '@/Common/Elements/CircularIntegration';

export default function Contact() {
  const [contactData, setContactData] = useState({});
  const [Message, setMessage] = useState('');
  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [warningToastOpen, setWarningToastOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormValues>({});

  type FormValues = {
    name: string;
    subject: string;
    email: string;
    messagetext: string;
    phonenumber: string;
    oraganization: string;

  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newData = await response.json();
        console.log(`Your Request sent Successfully`);
        setSuccessToastOpen(true);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
        setWarningToastOpen(true)
      }
    } catch (error) {
      setMessage('Error occurred while creating data.');
      setWarningToastOpen(true)
    } finally {
      setLoading(true);
    }
    setValue('name', '');
    setValue('phonenumber', '');
    setValue('oraganization', '');
    setValue('email', '');
    setValue('subject', '');
    setValue('messagetext', '');
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
              <TextField InputLabelProps={{ shrink: true }} {...register("name", { required: "Name is Required" })} id="outlined-basic" name="name" label="Full Name" variant="outlined" fullWidth />
              {errors.name && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.name.message}`}</p>}
            </Grid>
            <Grid item lg={3} md={6} sm={10} xs={12}>
              <TextField InputLabelProps={{ shrink: true }} {...register("subject", { required: "Subject is Required" })} id="outlined-basic" name="subject" label="Subject" variant="outlined" fullWidth />
              {errors.subject && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.subject.message}`}</p>}
            </Grid>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', gap: '30px' }}>
            <Grid item lg={3} md={6} sm={10} xs={12}>
              <TextField InputLabelProps={{ shrink: true }} {...register("phonenumber", { required: "Name is Required" })} id="outlined-basic" name="name" label="Full Name" variant="outlined" fullWidth />
              {errors.phonenumber && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.phonenumber.message}`}</p>}
            </Grid>
            <Grid item lg={3} md={6} sm={10} xs={12}>
              <TextField InputLabelProps={{ shrink: true }} {...register("oraganization", { required: "Subject is Required" })} id="outlined-basic" name="subject" label="Subject" variant="outlined" fullWidth />
              {errors.oraganization && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.oraganization.message}`}</p>}
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
                {...register("messagetext", { required: "Write A Message for messagetext" })}
                style={{ width: '100%', minWidth: 250, maxHeight: '90px', minHeight: '90px' }}
              />
              {errors.messagetext && <p role="alert" style={{ margin: '0px', paddingTop: '7px', color: "red" }}>{`${errors.messagetext.message}`}</p>}
            </Grid>
          </Box>
          <SubmitBtn disabled={loading} type="submit" onClick={handleSubmit(onSubmit)}>Submit</SubmitBtn>
        </Grid>
      </Box>

      <React.Fragment>
        <Snackbar
          open={successToastOpen}
          autoHideDuration={3000}
          onClose={() => setSuccessToastOpen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Alert onClose={() => setSuccessToastOpen(false)} severity="success" sx={{ width: '100%' }}>
            Message successfully Sent
          </Alert>
        </Snackbar>

        <Snackbar
          open={warningToastOpen}
          autoHideDuration={3000}
          onClose={() => setWarningToastOpen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Alert onClose={() => setWarningToastOpen(false)} severity="warning" sx={{ width: '100%' }}>
            something wents wrong
          </Alert>
        </Snackbar>
      </React.Fragment>
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
  height: 49px;
  padding: 0;
  justify-content: space-evenly;
  width: 117px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  &:hover{
  }
`;
const Error = styled.div`
  color: red;
`;

