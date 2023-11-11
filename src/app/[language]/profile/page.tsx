import type { Metadata } from "next";
import Profile from "./page-content";
import { getServerTranslation } from "@web/services/i18n";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "profile");

  return {
    title: t("title"),
  };
}

export default Profile;
