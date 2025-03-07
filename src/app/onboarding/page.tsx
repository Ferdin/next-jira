"use client";

import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
} from "@/components/FormComponents/EyeSlashFilledIcon";
import { Form, Input, SelectItem, Select, Button } from "@heroui/react";
import { useState } from "react";

export default function OnBoarding() {
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const [isConfPasswordVisible, setIsConfPasswordVisible] = useState(false);
  const toggleConfPasswordVisibility = () =>
    setIsConfPasswordVisible(!isConfPasswordVisible);
  const errors: string[] = [];
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Record<string, FormDataEntryValue> = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    console.log(data);
  };

  const validatePasswords = () => {
    if (password.length < 4) {
      errors.push("Password must be 4 characters or more.");
    }
    if ((password.match(/[A-Z]/g) || []).length < 1) {
      errors.push("Password must include at least 1 upper case letter");
    }
    if ((password.match(/[^a-z0-9]/gi) || []).length < 1) {
      errors.push("Password must include at least 1 symbol.");
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center font-sans">
      <div className="flex flex-col gap-3 w-96 rounded-md p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Welcome to Onboarding!
        </h1>
        <h2 className="text-center">Tell Us About Your Company</h2>
        <p></p>
        <Form onSubmit={onSubmit}>
          <Input label="Company name" name="companyName" isRequired />
          <Input label="Admin email" isRequired type="email" />
          <Input label="Company Phone" type="text" />
          <Input
            label="Type a strong password"
            type={isPasswordVisible ? "text" : "password"}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            errorMessage={() => (
              <ul>
                {errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            )}
            isInvalid={errors.length > 0}
            value={password}
            onValueChange={setPassword}
            onBlur={validatePasswords}
          />
          <Input
            label="Confirm your passowrd"
            type={isConfPasswordVisible ? "text" : "password"}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleConfPasswordVisibility}
              >
                {isConfPasswordVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            value={confirmPassword}
            onValueChange={setConfirmPassword}
            onBlur={validatePasswords}
            isInvalid={!!error}
            errorMessage={error}
          />
          <Select label="Select Industry Type" isRequired>
            {industryTypes.map((types) => (
              <SelectItem key={types.key}>{types.label}</SelectItem>
            ))}
          </Select>
          <Input
            label="Number of Employees to add to this application"
            type="number"
            isRequired
          />
          <div className="flex gap-2 mx-auto mt-2">
            <Button className="bg-black text-white" type="submit">
              Next
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
