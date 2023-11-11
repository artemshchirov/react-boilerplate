import Link from "next/link";
import VerifyForm from "../features/auth/ui/verify-form";

function ResetPage() {
  return (
    <section>
      {/* Container */}
      <div className="w-full max-w-3xl px-5 py-16 mx-auto md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="max-w-xl px-8 py-12 mx-auto text-center bg-white">
          {/* Title */}
          <h2 className="max-w-md mx-auto my-5 text-3xl font-semibold tracking-tight md:text-5xl sm:text-base lg:mb-8">
            Forgot Password?
          </h2>
          <p className="mx-auto my-5 max-w-md text-sm text-[#636262] sm:text-base lg:mb-8">
            Enter your email address and we’ll send you instructions to reset
            your password.
          </p>
          <div className="mx-auto w-full max-w-[400px]">
            <VerifyForm />
            <p className="text-sm text-[#636262]">
              Didn&apos;t receive a code?{" "}
              <Link className="font-bold text-[#0b0b1f]" href="/register">
                Resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPage;
