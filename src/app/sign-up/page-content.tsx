"use client";
import { useRouter } from "next/navigation";
import { useForm, useFormState } from "react-hook-form";
import {
  useAuthLoginService,
  useAuthSignUpService,
} from "@web/services/api/services/auth";
import useAuthActions from "@web/services/auth/use-auth-actions";
import useAuthTokens from "@web/services/auth/use-auth-tokens";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import HTTP_CODES_ENUM from "@web/services/api/types/http-codes";
import { useTranslation } from "@web/services/i18n/client";
import SocialAuth from "@web/services/social-auth/social-auth";
import { isGoogleAuthEnabled } from "@web/services/social-auth/google/google-config";
import { isFacebookAuthEnabled } from "@web/services/social-auth/facebook/facebook-config";
import { Button } from "@web/components/ui/button";
import { TypographyH2 } from "@web/components/ui/typography/typography-h2";
import { TypographyP } from "@web/components/ui/typography/typography-p";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@web/components/ui/form";
import { Input } from "@web/components/ui/input";

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const useValidationSchema = () => {
  const { t } = useTranslation("sign-up");

  return yup.object().shape({
    email: yup
      .string()
      .email(t("sign-up:inputs.email.validation.invalid"))
      .required(t("sign-up:inputs.email.validation.required")),
    password: yup
      .string()
      .min(6, t("sign-up:inputs.password.validation.min"))
      .required(t("sign-up:inputs.password.validation.required")),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        t("sign-up:inputs.confirmPassword.validation.match")
      )
      .required(t("sign-up:inputs.confirmPassword.validation.required")),
  });
};

function FormActions() {
  const { t } = useTranslation("sign-up");
  const { isSubmitting } = useFormState();

  return (
    // <Button
    //   variant="contained"
    //   color="primary"
    //   type="submit"
    //   disabled={isSubmitting}
    //   data-testid="sign-up-submit"
    // >
    //   {t("sign-up:actions.submit")}
    // </Button>
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full"
      data-testid="sign-up-submit"
    >
      {t("sign-up:actions.submit")}
    </Button>
  );
}

function FormSignUp() {
  const { setUser } = useAuthActions();
  const { setTokensInfo } = useAuthTokens();
  const fetchAuthLogin = useAuthLoginService();
  const fetchAuthSignUp = useAuthSignUpService();
  const { t } = useTranslation("sign-up");
  const validationSchema = useValidationSchema();
  const router = useRouter();

  const methods = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, setError, control } = methods;

  const onSubmit = async (formData: SignUpFormData) => {
    const { data: dataSignUp, status: statusSignUp } = await fetchAuthSignUp(
      formData
    );

    if (statusSignUp === HTTP_CODES_ENUM.UNPROCESSABLE_ENTITY) {
      (Object.keys(dataSignUp.errors) as Array<keyof SignUpFormData>).forEach(
        (key) => {
          setError(key, {
            type: "manual",
            message: t(
              `sign-up:inputs.${key}.validation.server.${dataSignUp.errors[key]}`
            ),
          });
        }
      );

      return;
    }

    const { data: dataSignIn, status: statusSignIn } = await fetchAuthLogin({
      email: formData.email,
      password: formData.password,
    });
    console.log("sign-up:", statusSignIn);
    if (statusSignIn === HTTP_CODES_ENUM.OK) {
      setTokensInfo({
        token: dataSignIn.token,
        refreshToken: dataSignIn.refreshToken,
        tokenExpires: dataSignIn.tokenExpires,
      });
      setUser(dataSignIn.user);
      console.log("dataSignIn:", dataSignIn);

      router.push("/onboarding");
    }
  };

  return (
    <Form {...methods}>
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} mt={3}>
              <TypographyH2>{t("sign-up:title")}</TypographyH2>
            </Grid>

            {[isGoogleAuthEnabled, isFacebookAuthEnabled].some(Boolean) && (
              <Grid item xs={12}>
                <SocialAuth />
              </Grid>
            )}

            <Grid item xs={12}>
              <FormField
                control={control}
                key="email"
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("sign-up:inputs.email.label")}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              {/* <FormTextInput<SignUpFormData>
                name="password"
                label={t("sign-up:inputs.password.label")}
                type="password"
                testId="password"
              /> */}
              <FormField
                control={control}
                key="password"
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("sign-up:inputs.password.label")}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      minimum 8 characters, at least one uppercase letter.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              {/* <FormTextInput<SignUpFormData>
                name="password"
                label={t("sign-up:inputs.password.label")}
                type="password"
                testId="password"
              /> */}
              <FormField
                control={control}
                key="confirmPassword"
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <FormActions />
              {/* <Box ml={1} component="span">
                <Button
                  variant="contained"
                  color="inherit"
                  LinkComponent={Link}
                  href="/sign-in"
                >
                  {t("sign-up:actions.accountAlreadyExists")}
                </Button>
              </Box> */}
            </Grid>

            <Grid item xs={12}>
              <TypographyP className="text-sm text-[#636262]">
                Already have an account?{" "}
                <Link className=" text-[#2F2F2F] underline" href="/sign-in">
                  Sign in
                </Link>
              </TypographyP>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Form>
  );
}

function SignUp() {
  return <FormSignUp />;
}

export default SignUp;
