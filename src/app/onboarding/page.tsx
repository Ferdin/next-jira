"use client";

import { Form, Input, SelectItem, Select, Button } from "@heroui/react";

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
  return (
    <div className="h-screen w-screen flex items-center justify-center font-sans">
      <div className="flex flex-col gap-3 w-96 border border-gray-700 rounded-md p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Welcome to Onboarding!
        </h1>
        <h2 className="text-center">Tell Us About Your Company</h2>
        <p></p>
        <Form>
          <Input label="Company name" isRequired />
          <Input label="Company Email" isRequired />
          <Input label="Company Phone" />
          <Select label="Select Industry Type" isRequired>
            {industryTypes.map((types) => (
              <SelectItem key={types.key}>{types.label}</SelectItem>
            ))}
          </Select>
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
