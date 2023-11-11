import Section from "@web/shared/components/layouts/section";
import EmailForm from "./forms/email-form";
import PasswordForm from "./forms/password-form";
import PaymentForm from "./forms/payment-form";
import PlanForm from "./forms/plan-form";
import RoleForm from "./forms/role-form";
import UsernameForm from "./forms/username-form";
import AccountForm from "./account-form";

function AccountForms() {
  return (
    <Section className="flex flex-col rounded-lg gap-y-10 lg:mx-none w-full lg:max-w-[527px] items-center">
      <AccountForm>
        <EmailForm />
      </AccountForm>

      <AccountForm>
        <PasswordForm />
      </AccountForm>

      <AccountForm>
        <UsernameForm />
      </AccountForm>

      <AccountForm>
        <RoleForm />
      </AccountForm>

      <AccountForm>
        <PlanForm />
      </AccountForm>

      <AccountForm>
        <PaymentForm />
      </AccountForm>
    </Section>
  );
}

export default AccountForms;
