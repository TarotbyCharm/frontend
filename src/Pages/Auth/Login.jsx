import { useForm } from "react-hook-form";
import { astroSign, fullLogo, moon, star, sun, sunBg } from "../../assets";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/reducers/UserSlice";
import { useAuth } from "@/context/AuthContext";
import { setTokens } from "@/utils/axios";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser } = useAuth();
  const { status, error } = useSelector((state) => state.user);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const schema = yup.object({
    credentials: yup.string().required("This field is required."),
    password: yup.string().required("Password is required."),
    acceptTerms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      credentials: "",
      password: "",
      acceptTerms: true,
      device_name: navigator.userAgent,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(login(data)).then((result) => {
      if (result.payload) {
        const { user, access_token, refresh_token } = result.payload;
        setTokens(access_token, refresh_token);
        updateUser(user);
        form.reset();
        navigate("/");
      }
    });
  };

  const onError = (errors) => {
    console.log("errors", errors);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen overflow-hidden md:divide-x md:divide-white z-10">
      <div className="hidden md:block relative z-10">
        <img
          src={astroSign}
          className="absolute -top-32 xl:-top-40 h-80 xl:h-auto -right-20 xl:-right-24 opacity-40"
          alt="Astro Sign"
        />
        <img
          src={moon}
          className="absolute top-28 xl:top-44 left-28 xl:left-36 h-56 xl:h-[20rem] opacity-10"
          alt="Moon"
        />
        <img
          src={star}
          className="absolute right-5 top-56 xl:top-[20rem] h-44 xl:h-60 opacity-10"
          alt="Star"
        />
        <img
          src={sunBg}
          className="absolute -bottom-72 xl:-bottom-[20rem] -left-[23rem] xl:-left-[26.5rem] h-[42rem] xl:h-[50rem] opacity-40"
          alt="Sub Background"
        />
        <img
          src={sun}
          className="absolute -bottom-[28rem] xl:-bottom-[38rem] -right-[23.5rem] xl:-right-[31rem] h-[54rem] xl:h-auto opacity-10"
          alt="Sun"
        />
      </div>
      <div className="flex items-center justify-center pt-10 bg-secondary-500 z-20">
        <div className="max-w-lg sm:w-[28rem] md:w-[30rem]">
          {/* Logo Animation with Framer Motion */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link to="/">
              <img src={fullLogo} className="w-auto h-12 mx-auto" alt="Logo" />
            </Link>
            <h2 className="mt-10 text-3xl">
              <span className="text-3xl lg:text-4xl mr-4">Welcome</span>
              <span className="italic">back!</span>
            </h2>
          </motion.div>

          {/* Form Animation with Framer Motion */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {error && <small className="text-red-500 mb-4">{error}</small>}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="credentials"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username or Phone or Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Username" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="absolute inset-y-0 right-0 flex items-center px-3"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="acceptTerms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FormLabel htmlFor="acceptTerms">
                          I accept the terms and conditions
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="italic text-base w-full">
                  {status === "loading" ? (
                    <>
                      <Loader className="animate-spin mr-1.5" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    "Log In"
                  )}
                </Button>
                <div className="flex items-center gap-4">
                  <hr className="w-full border-gray-300" />
                  <p className="text-sm text-center">or</p>
                  <hr className="w-full border-gray-300" />
                </div>
                <p className="text-center">
                  Don&#39;t have an account?
                  <Link
                    to="/register"
                    className="pl-1.5 text-primary-500 underline"
                  >
                    Sign Up Here
                  </Link>
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
