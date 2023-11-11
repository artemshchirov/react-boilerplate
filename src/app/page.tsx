import type { Metadata } from "next";
import { getServerTranslation } from "@web/services/i18n";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { TypographyH1 } from "../components/ui/typography/typograhy-h1";
import { TopProjects } from "../features/dashboard";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "home");

  return {
    title: t("title"),
  };
}

export default async function Home() {
  const { t } = await getServerTranslation("en", "home");

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} wrap="nowrap" pt={3}>
        <Grid item>
          {/* <Typography>
            <Trans
              i18nKey={`description`}
              t={t}
              components={[
                <MuiLink
                  key="1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/brocoders/react-boilerplate/blob/main/docs/README.md"
                >
                  {}
                </MuiLink>,
              ]}
            />
          </Typography> */}
        </Grid>
      </Grid>
      <div className="flex flex-col items-center justify-center w-full mx-auto overflow-hidden transition-all border border-gray-200 shadow-md bg-red backdrop-blur hover:border-gray-300 hover:bg-white/50">
        <TypographyH1
          className="pt-6 mb-4 text-3xl font-bold text-center"
          text={t("title")}
        />

        <TopProjects />
      </div>
    </Container>
  );
}
