import type { Metadata } from "next";
import CreateUser from "./page-content";
import { getServerTranslation } from "@web/services/i18n";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(
    params.language,
    "admin-panel-users-create"
  );

  return {
    title: t("title"),
  };
}

export default CreateUser;
