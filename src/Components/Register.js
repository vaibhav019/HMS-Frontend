import  React ,{useState,useEffect,Fragment} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import base_url from '../api/api'
import Paper from '@mui/material/Paper';

//import { ToastContainer, toast } from 'react-toastify';
//import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {Redirect} from 'react-router-dom'
const theme = createTheme();

const styles = {
  paperContainer: {
      backgroundImage: `url(${"https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0="})`,
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
       height: '100%',
      opacity: 0.8,
      content: '""',
      display: 'block',
      Width:1000,
      height:1000,
      marginTop:0

  }
};
export default function Register() {
  const [data,setdata]=useState([]);


//   const validate = (fieldValues = values) => {
//     let temp = { ...errors }
//     if ('fullName' in fieldValues)
//         temp.fullName = fieldValues.fullName ? "" : "This field is required."
//     if ('email' in fieldValues)
//         temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
//     if ('mobile' in fieldValues)
//         temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
//     if ('departmentId' in fieldValues)
//         temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
//     setErrors({
//         ...temp
//     })

//     if (fieldValues == values)
//         return Object.values(temp).every(x => x == "")
// }

// const {
//     values,
//     setValues,
//     errors,
//     setErrors,
//     handleInputChange,
//     resetForm
// } = useForm(initialFValues, true, validate);



useEffect(()=>{
  document.title="Registration|HMS"
// const data=getdata();
// console.log(data);
// setdata(data);
},[]);
const getdata=()=>{
  axios.get(`${base_url}\api\Registers`).then(
    (response)=>{
      //success
      console.log(response);
      console.log("data")
    },(error)=>{
      //error
      console.log(error);
    }
  )
}

const postdata=(data)=>{
  axios.post("https://localhost:44314/api/user/insertuser",data).then(   //${base_url}\api\Registers
    (response)=>{
      //success
      console.log(response);
      //toast.success("Registration done Successfully");
      window.alert("Registration done Successfully")
    
      window.location = "/login";
    
      console.log("successs");
    },(error)=>{
      //error
      console.log(error);
      console.log("failed +++++++++++++++++++")
    }
  );
};
const[emailerror,setemailerror]=useState('')
  const [register,setregister]=useState({});
  const handleSubmit = (e) => {
    // if (validate()){
    console.log(register,"+++++++++++++++++++");
    if(register.PhoneNumber.length==10){
    postdata(register);
    }else{
      window.alert("Please Enter 10 digit Phone Number ")
    }
    e.preventDefault();
    
    //const data = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    //}
  };

  return (
    <Paper style={styles.paperContainer}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  autoComplete="given-name"
                  name="FirstName"
                  required
                  fullWidth
                  id="FirstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>{
                    setregister({...register,FirstName:e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="LastName"
                 
                  label="Last Name"
                  name="LastName"
                  autoComplete="family-name"
                  onChange={(e)=>{
                    setregister({...register,LastName:e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                  onChange={(e)=>{
                    let reg=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e.target.value) 
                    if(!reg){
                      setemailerror("Please Enter Valid Email")
                    }
                    setregister({...register,Email:e.target.value})
                 
                  }}
                  required
              error={Boolean(emailerror)}
              helperText={emailerror}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  inputProps={{maxLength:8}}
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="new-password"
                  onChange={(e)=>{
                    setregister({...register,Password:e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="PhoneNumber"
                label="Phone No."
                type="number"
                name="PhoneNumber"
               
                inputProps={{maxLength:10}}
                onChange={(e)=>{
                  setregister({...register,PhoneNumber:e.target.value})
                  //let reg=new RegExp(/^\d*$/).test(e.target.value) 
                  // if(e.target.value.length!=10){
                  //   setemailerror("Please Enter 10 digit PhoneNo.")
                  // }
                }}
                error={Boolean(emailerror)}
              helperText={emailerror}
              />
            </Grid>
              {/*<Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary"  />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>*/}
            </Grid>
            <Button
              type="submit"
              //fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,ml:2 }}
            >
              Sign Up
            </Button><Button
            type="reset"
            //fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,ml:2}}
            onClick={(e)=>{
              setregister({})
            }}
          >
            Reset
          </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/*  <Copyright sx={{ mt: 5 }} />*/}
      </Container>
    </ThemeProvider>
    </Paper>
  );
}