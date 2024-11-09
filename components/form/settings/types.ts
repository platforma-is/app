import { FormControllerType } from "@/index";
import { TSettings } from "@/shared/api/model";

export interface ISettingsBlock {
  formController: FormControllerType<Partial<TSettings>>;
}
