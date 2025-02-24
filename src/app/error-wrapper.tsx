"use client";
import "./globals.css";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-start"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border-gray-300">
      <div className="absolute top-10 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout"></ErrorSimulator>
      </div>
      {children}
    </div>
  );
};
