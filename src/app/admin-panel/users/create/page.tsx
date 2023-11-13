import type { Metadata } from "next";
import CreateUser from "./page-content";
import { getServerTranslation } from "@web/services/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "admin-panel-users-create");

  return {
    title: t("title"),
  };
}

export default CreateUser;
