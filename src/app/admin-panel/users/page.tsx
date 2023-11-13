import type { Metadata } from "next";
import { getServerTranslation } from "@web/services/i18n";
import Users from "./page-content";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "admin-panel-users");

  return {
    title: t("title"),
  };
}

export default Users;
