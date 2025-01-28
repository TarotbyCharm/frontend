import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const schema = yup.object({
    username: yup
      .string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters long.")
      .max(50, "Username is too long."),
    email: yup
      .string()
      .required("Email address is required.")
      .email("Invalid email address."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters long."),
    confirmPassword: yup
      .string()
      .required("Password confirmation is required.")
      .oneOf([yup.ref("password")], "Passwords must match."),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    console.log(data);
  };
  return <div>Register</div>;
}
