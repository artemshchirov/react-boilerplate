"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import OtpInput from "react-otp-input";
import { redirect, useRouter } from "next/navigation";
import LoginForm from "@web/features/auth/ui/login-form";
import HeaderFull from "../shared/components/layouts/header-full";
import VerifyForm from "../features/auth/ui/verify-form";
import { Button } from "../components/ui/button";
import Section from "../shared/components/layouts/section";
// TODO: event verify button on Enter
function VerifyPage() {
  //FIXME: https://javascript.plainenglish.io/how-to-create-an-otp-input-box-in-react-js-next-js-3acc6adf5d6b
  const [otp, setOtp] = useState("");
  const verifyButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (otp.length === 6) {
      verifyButtonRef.current?.click();
    }
  }, [otp]);

  return (
    <Section className="my-auto mt-10 lg:mt-0">
      <h2 className="max-w-md mx-auto text-4xl font-normal tracking-tight md:text-5xl ">
        verify email
      </h2>
      <p className="mx-auto pt-4 max-w-md  text-base text-[#2F2F2F] font-normal sm:text-base">
        Please enter the code sent to your email
      </p>
      <div className="mx-auto w-full max-w-[400px]">
        <OtpInput
          containerStyle="flex  gap-2.5 py py-6 lg:py-8"
          inputStyle="min-w-[40px] min-h-[50px] text-[#2F2F2F] text-2xl  font-light rounded-xl border border-[#BCBCBC]"
          numInputs={6}
          onChange={setOtp}
          renderInput={(props) => <input {...props} />}
          renderSeparator={<span className="" />}
          shouldAutoFocus
          value={otp}
        />
        <Button
          className="w-full bg-[#034057]"
          disabled={otp.length !== 6}
          onClick={() => {
            router.push("/");
          }}
          ref={verifyButtonRef}
          type="submit"
        >
          Verify
        </Button>
        <p className="text-sm text-[#2F2F2F] mt-6 lg:mt-3.5  w-max mx-auto group group-hover cursor-pointer">
          Didn&apos;t receive a code?{" "}
          <Button
            className="font-bold text-[#034057] group-hover:underline p-0 h-min underline"
            variant="link"
          >
            Resend
          </Button>
        </p>
      </div>
    </Section>
  );
}

export default VerifyPage;
