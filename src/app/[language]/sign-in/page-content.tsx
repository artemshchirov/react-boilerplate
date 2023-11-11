"use client";

import { Button } from "@web/components/ui/button";
import withPageRequiredGuest from "@web/services/auth/with-page-required-guest";
import { useForm, useFormState } from "react-hook-form";
import { useAuthLoginService } from "@web/services/api/services/auth";
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
import { TypographyH2 } from "@web/components/ui/typography/typograhy-h2";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@web/components/ui/form";
import { Input } from "@web/components/ui/input";
import { TypographyP } from "../../../components/ui/typography/typography-p";
import { Label } from "../../../components/ui/label";
import { TypographyMuted } from "../../../components/ui/typography/typography-muted";

type SignInFormData = {
  email: string;
  password: string;
};

const useValidationSchema = () => {
  const { t } = useTranslation("sign-in");

  return yup.object().shape({
    email: yup
      .string()
      .email(t("sign-in:inputs.email.validation.invalid"))
      .required(t("sign-in:inputs.email.validation.required")),
    password: yup
      .string()
      .min(6, t("sign-in:inputs.password.validation.min"))
      .required(t("sign-in:inputs.password.validation.required")),
  });
};

function FormActions() {
  const { t } = useTranslation("sign-in");
  const { isSubmitting } = useFormState();

  return (
    // <Button
    //   variant="contained"
    //   color="primary"
    //   type="submit"
    //   disabled={isSubmitting}
    //   data-testid="sign-in-submit"
    // >
    //   {t("sign-in:actions.submit")}
    // </Button>
    <Button type="submit" disabled={isSubmitting} className="w-full">
      {t("sign-in:actions.submit")}
    </Button>
  );
}

function LoginForm() {
  const { setUser } = useAuthActions();
  const { setTokensInfo } = useAuthTokens();
  const fetchAuthLogin = useAuthLoginService();
  const { t } = useTranslation("sign-in");
  const validationSchema = useValidationSchema();

  const methods = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, setError, control } = methods;

  const onSubmit = async (formData: SignInFormData) => {
    const { data, status } = await fetchAuthLogin(formData);

    if (status === HTTP_CODES_ENUM.UNPROCESSABLE_ENTITY) {
      (Object.keys(data.errors) as Array<keyof SignInFormData>).forEach(
        (key) => {
          setError(key, {
            type: "manual",
            message: t(
              `sign-in:inputs.${key}.validation.server.${data.errors[key]}`
            ),
          });
        }
      );

      return;
    }

    if (status === HTTP_CODES_ENUM.OK) {
      setTokensInfo({
        token: data.token,
        refreshToken: data.refreshToken,
        tokenExpires: data.tokenExpires,
      });
      setUser(data.user);
    }
  };

  return (
    <Form {...methods}>
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} mt={3}>
              <TypographyH2 className="text-center">
                {t("sign-in:title")}
              </TypographyH2>
            </Grid>
            {[isGoogleAuthEnabled, isFacebookAuthEnabled].some(Boolean) && (
              <Grid item xs={12}>
                {/* <Divider sx={{ mb: 2 }}>
										<Chip label={t("sign-in:or")} />
									</Divider> */}

                <SocialAuth />
              </Grid>
            )}
            <Grid item xs={12}>
              {/* <FormTextInput<SignInFormData>
                name="email"
                label={t("sign-in:inputs.email.label")}
                type="email"
                testId="email"
                autoFocus
              /> */}
              <FormField
                control={control}
                key="email"
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
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
              /> */}
            </Grid>

            <Grid item xs={12}>
              {/* <FormTextInput<SignInFormData>
                name="password"
                label={t("sign-in:inputs.password.label")}
                type="password"
                testId="password"
              /> */}
              <FormField
                control={control}
                key="password"
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="leading-0">Password</FormLabel>
                      <Label>
                        <Link href="/forgot-password" className="leading-0">
                          <TypographyMuted>
                            {t("sign-in:actions.forgotPassword")}
                          </TypographyMuted>
                        </Link>
                      </Label>
                    </div>
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

              {/* <Box ml={1} component="span"> */}
              {/* <Button
                  variant="contained"
                  color="inherit"
                  LinkComponent={Link}
                  href="/sign-up"
                >
                  {t("sign-in:actions.createAccount")}
                </Button> */}
              {/* </Box> */}
              <TypographyP className="text-sm text-[#636262]">
                Not a member yet?{" "}
                <Link className=" text-[#2F2F2F] underline" href="/register">
                  Create free account
                </Link>
              </TypographyP>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Form>
  );
}

function SignIn() {
  return <LoginForm />;
}

export default withPageRequiredGuest(SignIn);
