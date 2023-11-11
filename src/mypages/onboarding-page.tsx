"use client";

import { useState, useCallback } from "react";
import OnboardingRole from "../features/onboarding/ui/onboarding-role";
import OnboardingAbout from "../features/onboarding/ui/onboarding-about";
import { Steps } from "../shared/enums/steps";

function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<number>(Steps.ROLE);
  const [roleData, setRoleData] = useState<string | null>(null);
  const [aboutData, setAboutData] = useState<{
    fullName: string;
    username: string;
    color: string;
    terms: boolean;
    updates: boolean;
  }>({
    fullName: "",
    username: "",
    color: "",
    terms: false,
    updates: false,
  });

  const handleStepChange = useCallback((step: Steps) => {
    setCurrentStep(step);
  }, []);

  const handleAboutSubmit = (data: {
    fullName: string;
    username: string;
    color: string;
    terms: boolean;
    updates: boolean;
  }) => {
    try {
      // alert(`roleData: ${JSON.stringify(roleData)}`);
      // alert(`aboutData: ${JSON.stringify(aboutData)}`);
      // alert(`Send: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error("Error submitting onboarding data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center space-x-2 mb-4">
        {[Steps.ROLE, Steps.ABOUT].map((step) => (
          <div
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentStep === step ? "bg-blue-500" : "bg-gray-300"
            }`}
            key={step}
            onClick={() => {
              handleStepChange(step);
            }}
          />
        ))}
      </div>

      {currentStep === Steps.ROLE ? (
        <OnboardingRole onRoleSelect={setRoleData} onSkip={handleStepChange} />
      ) : (
        <OnboardingAbout
          onAboutUpdate={setAboutData}
          onSubmit={handleAboutSubmit}
        />
      )}
    </div>
  );
}

export default OnboardingPage;
