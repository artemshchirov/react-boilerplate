import type { Metadata } from "next";
import Profile from "./page-content";
import { getServerTranslation } from "@web/services/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "profile");

  return {
    title: t("title"),
  };
}

export default Profile;
