"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import STAGGER_CHILD_VARIANTS from "./stagger-variants";
import Confetti from "react-dom-confetti";
interface OnboardingAboutProps {
  onAboutUpdate: (data: {
    fullName: string;
    username: string;
    color: string;
    terms: boolean;
    updates: boolean;
  }) => void;
  onSubmit: (data: {
    fullName: string;
    username: string;
    color: string;
    terms: boolean;
    updates: boolean;
  }) => void;
}

const OnboardingAbout = ({ onAboutUpdate, onSubmit }: OnboardingAboutProps) => {
  const [aboutData, setAboutData] = useState({
    fullName: "",
    username: "",
    color: "#ffffff",
    terms: false,
    updates: false,
  });
  const [celebrate, setCelebrate] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setAboutData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(aboutData);
    setCelebrate(true);
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-10"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.h1
        variants={STAGGER_CHILD_VARIANTS}
        className="text-2xl font-bold"
      >
        almost there!
      </motion.h1>

      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="w-full flex flex-col space-y-4"
      >
        <div className="flex items-center space-x-4">
          <img
            src="path-to-avatar.jpg"
            alt="User Avatar"
            className="rounded-full w-16 h-16"
          />
          <input
            type="text"
            name="fullName"
            value={aboutData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            name="username"
            value={aboutData.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="border rounded-md p-2 w-full"
          />
          <span className="text-red-500 text-sm">
            Username is already taken
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="color"
            name="color"
            value={aboutData.color}
            onChange={handleInputChange}
            className="w-6 h-6"
          />
          <span>Favorite Color</span>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={aboutData.terms}
            onChange={handleInputChange}
          />
          <label htmlFor="terms" className="text-sm">
            I agree to Terms of Use & Privacy Policy
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="updates"
            name="updates"
            checked={aboutData.updates}
            onChange={handleInputChange}
          />
          <label htmlFor="updates" className="text-sm">
            Keep me informed with email updates
          </label>
        </div>
      </motion.div>
      <Confetti active={celebrate} />
      <motion.button
        onClick={handleSubmit}
        variants={STAGGER_CHILD_VARIANTS}
        className="bg-blue-500 text-white rounded-md p-4 w-1/2 text-center mt-4"
      >
        Enter Widegamut
      </motion.button>
    </motion.div>
  );
};

export default OnboardingAbout;
