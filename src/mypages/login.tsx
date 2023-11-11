import Link from "next/link";
import LoginForm from "@web/features/auth/ui/login-form";
import HeaderFull from "../shared/components/layouts/header-full";

function LoginPage() {
  return (
    <section>
      {/* Container */}
      <div className="w-full max-w-3xl px-5 pb-16 mx-auto md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="max-w-xl px-8 pb-12 mx-auto text-center bg-white">
          {/* Title */}
          <h2 className="max-w-md mx-auto mb-5 text-3xl font-semibold tracking-tight md:text-5xl sm:text-base lg:mb-8">
            Sign In
          </h2>

          <div className="mx-auto w-full max-w-[400px]">
            <Link
              className="flex justify-center w-full max-w-full py-3 text-white bg-black rounded-md"
              href="#"
            >
              <img
                alt=""
                className="inline-block mr-4"
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947090e6cf87_GoogleLogo.svg"
              />
              <p className="text-sm sm:text-base">Sign up with Google</p>
            </Link>
            <LoginForm />
            <p className="text-sm text-[#636262]">
              not a member yet?{" "}
              <Link className="font-bold text-[#0b0b1f]" href="/register">
                Create free account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
