import type { Metadata } from "next";
import EditUser from "./page-content";
import { getServerTranslation } from "@web/services/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "admin-panel-users-edit");

  return {
    title: t("title1"),
  };
}

export default EditUser;
