
import {
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import axios from "axios";


const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) =>{
    try{
      let res = await axios.post("", 
      data
    );
    console.log(res.data);
  }catch(err){
    console.log("Error:", err)
  }

  }

  console.log(watch("example"));
  return (
    <>
    <Header />
    <Container sx={{ width: { md: "50%", xs: "100%" }, marginTop: "35px" }}>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#043caa",
        }}
      >
        Login
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        
        <Stack  gap={3}>
          <TextField
            sx={{ flex: 1 }}
            type="email"
            id="Email"
            label="Email"
            error={Boolean(errors.email)}
            helperText={errors.email ? "You should enter your Email" : null}
            {...register("email", {
              pattern: regEmail,
              required: true,
            })}
          />
          <TextField
            sx={{ flex: 1 }}
            type="password"
            id="Password"
            label="Password"
            error={Boolean(errors.password)}
            helperText={
              errors.password ? "You should enter your Password" : null
            }
            {...register("Password", {
              pattern: regPassword,
              required: true,
            })}
          />
        </Stack>
        

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "15rem",
              height: "3rem",
              display: "flex",
              ml: "auto",
              mr: "auto",
              alignItems: "center",
              background: "#043caa",
              fontSize: "1.2rem",
              "&:hover": {
                color: "#043caa",
                backgroundColor: "#fff",
                fontWeight: "bold",
              },
            }}
          >
            Login
          </Button>


      </Box>
    </Container>  
    </>
  )
}

export default Login
