import { RegisterForm } from "@/types/RegisterForm";

//src/libs/AuthService.ts
export default class AuthService {
  static async Register(data: RegisterForm) {
    //send data to api
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}
