"use client";
import useAuth from "@web/services/auth/use-auth";
import withPageRequiredAuth from "@web/services/auth/with-page-required-auth";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useTranslation } from "@web/services/i18n/client";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
}));

function Profile() {
  const { user } = useAuth();
  const { t } = useTranslation("profile");
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} wrap="nowrap" pt={3}>
        <Grid item xs="auto">
          <StyledAvatar alt={user?.fullName} src={user?.avatarUrl} />
        </Grid>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {user?.fullName}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {user?.email}
          </Typography>
          <Grid container>
            <Grid item>
              {/* <Button
                variant="contained"
                color="primary"
                LinkComponent={Link}
                href="/profile/edit"
              >
                {t("profile:actions.edit")}
              </Button> */}
              <Link href="/profile/edit">{t("profile:actions.edit")}</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withPageRequiredAuth(Profile);
