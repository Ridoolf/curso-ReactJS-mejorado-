import {
  TextField,
  Button,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  FilledInput,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="filled"
        color="secondary"
      />
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="filled"
        color="secondary"
      >
        <InputLabel htmlFor="filled-adornment-password" color="secondary">
          Password
        </InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff color="secondary" />
                ) : (
                  <Visibility color="secondary" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" color="secondary">
        Login
      </Button>
    </Box>
  );
};
