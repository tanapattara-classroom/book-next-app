"use client";
import AuthService from "@/libs/AuthService";
import { RegisterForm } from "@/types/RegisterForm";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Input,
  Stack,
  CardActionArea,
  Button,
} from "@mui/material";
import { useState } from "react";
import type { RegistrationRes, User } from "@/types/RegisterRes";

// localhost:3001/register
export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = () => {
    //TODO:Get data from registerForm
    const data: RegisterForm = {
      username: "tester5",
      email: "tester5@example.com",
      password: "password123",
    } as RegisterForm;

    AuthService.Register(data).then(async (response) => {
      if (response.status === 201) {
        const res: RegistrationRes = await response.json();
        console.log(res);

        //redirect to login page.
        window.location.href = "/login";
      }
    });
  };
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">Register Page</Typography>
            <Input placeholder="Username" fullWidth />
            <Input placeholder="Email" fullWidth />
            <Input placeholder="Password" type="password" fullWidth />
            <Input placeholder="Password" type="password" fullWidth />
          </Stack>
        </CardContent>
        <CardActionArea>
          <Button onClick={handleRegister} fullWidth>
            Register
          </Button>
        </CardActionArea>
      </Card>
    </Container>
  );
}
