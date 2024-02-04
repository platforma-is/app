import { useCallback, useState } from "react";
import { activeFormApi, unactiveFormApi } from "@/data/form";
import { Switch } from "@mantine/core";

async function activeForm(id: string): Promise<void> {
  await activeFormApi(id);
}

async function unactiveForm(id: string): Promise<void> {
  await unactiveFormApi(id);
}

export function ActiveToggleForm({
  formId,
  active,
}: {
  formId: string;
  active: boolean;
}) {
  const [checked, setChecked] = useState(active);

  const toggle = useCallback(async () => {
    if (active) {
      setChecked(false);
      unactiveForm(formId);
    } else {
      setChecked(true);
      activeForm(formId);
    }
  }, [active, formId]);

  return (
    <Switch
      onChange={toggle}
      color="teal"
      onLabel="ON"
      offLabel="OFF"
      size="lg"
      checked={checked}
    />
  );
}
