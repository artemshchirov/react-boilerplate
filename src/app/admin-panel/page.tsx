import type { Metadata } from "next";
import { getServerTranslation } from "@web/services/i18n";
import AdminPanel from "./page-content";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "admin-panel-home");

  return {
    title: t("title"),
  };
}

export default AdminPanel;
