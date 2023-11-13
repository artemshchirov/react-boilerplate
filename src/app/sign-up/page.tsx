import type { Metadata } from "next";
import SignUp from "./page-content";
import { getServerTranslation } from "@web/services/i18n";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "sign-up");

  return {
    title: t("title"),
  };
}

export default SignUp;
