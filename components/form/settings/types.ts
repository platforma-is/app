import { FormControllerType } from "@/shared/types";
import { TSettings } from "@/shared/api/model";

export interface ISettingsBlock {
  formController: FormControllerType<TSettings>;
}
