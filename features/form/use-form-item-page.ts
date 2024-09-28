import { IconCode, IconMail, IconSettings2 } from "@tabler/icons-react";
import { useState } from "react";
import { NullableForm } from "@/shared/api/model";

function useFormItemPage(form: NullableForm) {
  const [activeTab, setActiveTab] = useState<string | null>("integration");

  const tabs = [
    {
      name: "integration",
      text: "Вставка на сайт",
      ico: IconCode,
    },

    {
      name: "responses",
      text: "Ответы",
      ico: IconMail,
    },
    //TODO интеграции сначала реализовать а потом отобразить

    // {
    //   name: "integrations",
    //   text: "Интеграции",
    //   ico: IconNorthStar,
    // },
    {
      name: "settings",
      text: "Настройка",
      ico: IconSettings2,
    },
  ];

  const publicLink = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/forms/${form?.id}/responses`;

  return {
    tabs,
    publicLink,
    activeTab,
    setActiveTab,
  };
}

export default useFormItemPage;
