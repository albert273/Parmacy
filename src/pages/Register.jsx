import {
  Alert,
  Button,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = async (data) =>{
    handleClick();
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
      <Container sx={{ width: { md: "75%", xs: "100%" }, marginTop: "35px" }}>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#043caa",
          }}
        >
          Registration
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
          <Stack gap={2} direction={"row"}>
            <TextField
              type="text"
              id="FirstName"
              label="FirstName"
              error={Boolean(errors.firstName)}
              helperText={
                errors.firstName ? "You should enter your full Name" : null
              }
              {...register("FirstName", {
                required: true,
              })}
              sx={{ flex: 1 }}
            />
            <TextField
              type="text"
              id="LastName"
              label="LastName"
              error={Boolean(errors.lastName)}
              helperText={
                errors.lastName ? "please enter your Last Name" : null
              }
              {...register("LastName", {
                required: true,
              })}
              sx={{ flex: 1 }}
            />
          </Stack>

          <TextField
            id="number"
            label="Number"
            error={Boolean(errors.number)}
            helperText={
              errors.number ? "please enter your whatsApp Number" : null
            }
            {...register("number", {
              required: true,
              pattern: phoneRegExp,
            })}
          />
          <Stack direction={"row"} gap={2}>
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
          <Stack direction={"row"} gap={2}>
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="City"
              label="City"
              error={Boolean(errors.city)}
              helperText={
                errors.city ? "You should enter your city" : null
              }
              {...register("City", {
                required: true,
              })}
            />
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="Street"
              label="Street"
              error={Boolean(errors.Street)}
              helperText={
                errors.Street ? "You should enter your Street" : null
              }
              {...register("Street", {
                required: true,
              })}
            />
          </Stack>
          <TextField
              sx={{ flex: 1 }}
              type="text"
              id="ChronicDiseases"
              label="Chronic Diseases"

              {...register("ChronicDiseases", {
              })}
            />

          <Stack direction={"row"} gap={2}>
            <TextField
              type="number"
              id="Age"
              label="Age"
              error={Boolean(errors.age)}
              helperText={errors.age ? "You must be older " : null}
              {...register("Age", {
                required: true,
                min: 15,
                max: 100,
              })}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "22rem",
                height: "3rem",
                display: "flex",
                ml: { xs: "0", sm: "25rem" },
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
              submit
            </Button>

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose}
                severity="info"
                sx={{ width: "100%" }}
              >
                Complete the registration
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
