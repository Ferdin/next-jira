"use client";

import { Form, Input, SelectItem, Select, Button } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  companyName: string;
  adminEmail: string;
  companyPhone: string;
  password: string;
  confirmPassword: string;
  industryType: string;
  employeeCount: number;
};
export default function OnBoarding() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const industryTypes = [
    { key: "Engineering", label: "Engineering" },
    { key: "Healthcare", label: "Healthcare" },
    { key: "Finance", label: "Finance" },
    { key: "Education", label: "Education" },
    { key: "Manufacturing", label: "Manufacturing" },
    { key: "Real Estate", label: "Real Estate" },
    { key: "Transportation", label: "Transportation" },
    { key: "Entertainment", label: "Entertainment" },
    { key: "Hospitality", label: "Hospitality" },
    { key: "Energy", label: "Energy" },
    { key: "Agriculture", label: "Agriculture" },
    { key: "Telecommunications", label: "Telecommunications" },
    { key: "Construction", label: "Construction" },
    { key: "Legal", label: "Legal" },
    { key: "Marketing", label: "Marketing" },
    { key: "Automotive", label: "Automotive" },
    { key: "Insurance", label: "Insurance" },
    { key: "Government", label: "Government" },
    { key: "Non-Profit", label: "Non-Profit" },
  ];
  const password = watch("password", "");
  const [errors, setErrors] = useState({});
  return (
    <div className="h-screen w-screen flex items-center justify-center font-sans">
      <div className="flex flex-col gap-3 w-96 rounded-md p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Welcome to Onboarding!
        </h1>
        <h2 className="text-center">Tell Us About Your Company</h2>
        <p></p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Company name"
            type="text"
            isRequired
            {...register("companyName")}
          />
          <Input
            label="Admin email"
            type="email"
            {...register("adminEmail", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            isRequired
          />
          <Input
            label="Company Phone"
            type="text"
            {...register("companyPhone", {
              pattern: {
                value: /^[0-9+-\s()]*$/,
                message: "Invalid phone number format",
              },
            })}
          />
          <Input
            label="Type a strong password"
            type="password"
            isRequired
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            })}
          />
          <Input
            label="Confirm your passowrd"
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            isRequired
          />
          <Select label="Select Industry Type" isRequired>
            {industryTypes.map((types) => (
              <SelectItem key={types.key}>{types.label}</SelectItem>
            ))}
          </Select>
          <input
            type="hidden"
            {...register("industryType", {
              required: "Industry type is required",
            })}
          />
          <Input
            label="Number of Employees to add to this application"
            type="number"
            isRequired
            {...register("employeeCount", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Must have at least 1 employee",
              },
            })}
          />
          <div className="flex gap-2 mx-auto mt-2">
            <Button className="bg-black text-white" type="submit">
              Next
            </Button>
            <Button type="reset" variant="flat" onPress={() => reset()}>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
