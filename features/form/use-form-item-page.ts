import {
  IconClipboardList,
  IconNorthStar,
  IconSettings2,
} from "@tabler/icons-react";
import { IForm } from "@/shared/types";
import { useState } from "react";

function useFormItemPage(form: IForm) {

  const [activeTab, setActiveTab] = useState<string | null>("integration");

  const tabs = [
    {
      name: "integration",
      text: "Установка на сайт",
      ico: IconNorthStar,
    },
    {
      name: "responses",
      text: "Ответы",
      ico: IconClipboardList,
    },
    {
      name: "settings",
      text: "Настройка",
      ico: IconSettings2,
    },
  ];

  const publicLink = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/api/form/${form?.id}`;

  return {
    tabs,
    publicLink,
    activeTab,
    setActiveTab,
  };
}

export default useFormItemPage;
