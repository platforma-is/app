import { useCallback, useState } from "react";
import { Switch } from "@mantine/core";

type FormActiveToggleLayoutProps = {
  formId: string;
  active: boolean;
  onFormActive: (id: string) => void;
  onFormDeactive: (id: string) => void;
};

export function FormActiveToggleLayout({
  formId,
  active,
  onFormActive,
  onFormDeactive,
}: FormActiveToggleLayoutProps) {
  const [checked, setChecked] = useState(active);

  const toggle = useCallback(async () => {
    if (active) {
      setChecked(false);
      onFormDeactive(formId);
    } else {
      setChecked(true);
      onFormActive(formId);
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
