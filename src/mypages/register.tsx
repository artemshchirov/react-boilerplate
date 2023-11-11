import RegisterForm from "@web/features/auth/ui/register-form";

function RegisterPage() {
  return (
    <>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight md:mb-12 md:text-5xl lg:mb-16">
        join the filmmakers portfolio
      </h2>
      <div className="mx-auto mb-4 max-w-[400px] pb-4">
        <RegisterForm />
      </div>
    </>
  );
}

export default RegisterPage;
