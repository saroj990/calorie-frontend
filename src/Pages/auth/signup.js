import classNames from "classnames";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { axios } from "../../util/auth";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const onSubmit = async (formData) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await axios.post(`auth/register`, formData);
      toast.success("Account created successfully!");
      navigate("/auth/signin", { replace: true });
    } catch (e) {
      !e.response?.data && toast.error(e.message);
      e.response?.data &&
        Object.values(e.response?.data)
          .filter((el) => typeof el != "object")
          .forEach(toast.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center bg-slate-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full md:w-1/3 px-10 pt-10 pb-20 space-y-6 gap-2 bg-white shadow-md rounded-md"
      >
        <div className=" text-center font-bold text-slate-700 capitalize text-2xl">
          Sign Up
        </div>
        <input
          type="text"
          placeholder="John"
          className={classNames(
            "p-1 rounded-md",
            (errors?.firstName && "border-2 border-rose-400") || "border-2"
          )}
          {...register("firstName", { required: " * Firstname is required" })}
        />
        {errors?.firstName && (
          <label className="text-right text-xs font-bold italic text-red-400">
            {errors.firstName?.message}
          </label>
        )}
        <input
          type="text"
          placeholder="Doe"
          className="p-1 rounded-md border-2"
          {...register("lastName")}
        />
        <input
          type="email"
          className={classNames(
            "p-1 rounded-md",
            (errors?.email && "border-2 border-rose-400") || "border-2"
          )}
          placeholder="Email"
          {...register("email", {
            required: "* Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "* Email is invalid",
            },
          })}
        />
        {errors?.email && (
          <label className="text-right text-xs font-bold italic text-red-400">
            {errors.email?.message}
          </label>
        )}
        <input
          className={classNames(
            "p-1 rounded-md",
            (errors?.password && "border-2 border-rose-400") || "border-2"
          )}
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "* Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/i,
              message:
                "* should contain at least one uppercase, one lowercase, one special character, one number and minimum 8 characters.",
            },
          })}
        />
        {errors?.password && (
          <label className="text-right text-xs italic font-bold	text-red-400 opacity-90">
            {errors.password?.message}
          </label>
        )}
        <div className="my-4"></div>
        <button
          type="submit"
          className="border rounded-lg px-1 py-1.5 bg-slate-600 text-white font-medium"
        >
          Sign Up
        </button>
        <Link
          to="/auth/signin"
          className="border rounded-lg px-1 py-1.5 bg-slate-600 text-white font-medium text-center"
        >
          Sign In
        </Link>
      </form>
    </section>
  );
}

export { SignUp };
