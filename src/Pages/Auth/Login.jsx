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
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const schema = yup.object({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required."),
    acceptTerms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  const form = useForm({
    resolver: yupResolver(schema), // Connect Yup with React Hook Form
    defaultValues: {
      username: "",
      password: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data) => {
    setLoading(false);
    console.log(data);
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-screen overflow-hidden divide-x divide-white z-10">
      <div className="relative z-10">
        <img
          src={astroSign}
          className="absolute -top-32 xl:-top-40 h-80 xl:h-auto -right-20 xl:-right-24 opacity-40"
          alt="Astro Sign"
        />
        <img
          src={moon}
          className="absolute top-28 xl:top-44 left-28 xl:left-36 h-56 xl:h-[20rem] opacity-20"
          alt="Moon"
        />
        <img
          src={star}
          className="absolute right-5 top-56 xl:top-[20rem] h-44 xl:h-60 opacity-20"
          alt="Star"
        />
        <img
          src={sunBg}
          className="absolute -bottom-72 xl:-bottom-[20rem] -left-[23rem] xl:-left-[26.5rem] h-[42rem] xl:h-[50rem] opacity-40"
          alt="Sub Background"
        />
        <img
          src={sun}
          className="absolute -bottom-[28rem] xl:-bottom-[38rem] -right-[23.5rem] xl:-right-[31rem] h-[54rem] xl:h-auto opacity-20"
          alt="Sun"
        />
      </div>
      <div className="flex items-center pt-10 bg-secondary-500 z-20">
        <div className="w-full">
          <div className="text-center mb-10">
            <img src={fullLogo} className="w-auto mx-auto" alt="Logo" />
            <h2 className="mt-10 text-3xl">
              <span className="text-6xl mr-4">Welcome</span>
              <span className="italic">back!</span>
            </h2>
          </div>
          <div className="px-32">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
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
                  {loading ? "Loading..." : "Log In"}
                </Button>
                <div className="flex items-center gap-4">
                  <hr className="w-full border-gray-300" />
                  <p className="text-sm text-center">or</p>
                  <hr className="w-full border-gray-300" />
                </div>
                <Button
                  type="button"
                  className="bg-white hover:bg-white hover:text-primary-500 text-black italic text-base w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    className="inline"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                      data-original="#fbbd00"
                    />
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                      data-original="#0f9d58"
                    />
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                      data-original="#31aa52"
                    />
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                      data-original="#3c79e6"
                    />
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                      data-original="#cf2d48"
                    />
                    <path
                      fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                      data-original="#eb4132"
                    />
                  </svg>
                  Sign In With Google
                </Button>
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
          </div>
        </div>
      </div>
    </div>
  );
}
