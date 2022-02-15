import React ,{useState,useEffect,Fragment} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const styles = {
  paperContainer: {
      backgroundImage: `url(${"https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0="})`,
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
       height: '100%',
      opacity: 0.6,
      content: '""',
      display: 'block',
      Width:1000,
      height:1000,
      marginTop:0

  }
};
const theme = createTheme();
export var role='';
export default function Login(props) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/user/login",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response,"============");
        //toast.success("Login done Successfully");
        if(response.data.isSuccess){
        window.alert(response.data.message)
        window.location = "/userhome";
        console.log("successs");
        }else{
          window.alert(response.data.message)
        }
        
      },(error)=>{
        //error
        window.alert(error)
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
  const[emailerror,setemailerror]=useState('')
    const [login,setlogin]=useState({});
    const handleSubmit = (e) => {
      console.log(login,"+++++++++++++++++++");
      if(login.Email=="vaibhavsengarnetid@gmail.com" && login.Password=="12345"){
        console.log(login.Email)
        console.log(login.Password)
        window.alert("Login done as admin")
       localStorage.setItem('role','admin')
       window.alert("Login done as ",localStorage.getItem('role'))

      window.location = "/adminhome"
      e.preventDefault();
      //props.history.push("/adminhome");
      }else{
       postdata(login);
       e.preventDefault();
      }
      //const data = new FormData(e.currentTarget);
      // eslint-disable-next-line no-console
      // console.log({
      //   email: data.get('email'),
      //   password: data.get('password'),
      // });
    };

  return (
    <div>
    <Paper style={styles.paperContainer}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="off"
              inputProps={{maxLength:100}}
              autoFocus
              onChange={(e)=>{
                setlogin({...login,Email:e.target.value})
                let reg=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e.target.value) 
                if(!reg){
                  setemailerror("Please Enter Valid Email")
                }
              }}
              required
              error={Boolean(emailerror)}
              helperText={emailerror}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{maxLength:8}}
              name="Password"
              label="Password"
              type="password"
              id="Password"
              autoComplete="current-password"
              onChange={(e)=>{
                setlogin({...login,Password:e.target.value})
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              //fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,ml:2}}
            >
              Sign In
            </Button><Button
            type="reset"
            //fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,ml:2}}
            onClick={(e)=>{
              setlogin({})
            }}
          >
            Reset
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" action  tag="a" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
      </Container>
    </ThemeProvider>
    </Paper>
    </div>
  );
}
