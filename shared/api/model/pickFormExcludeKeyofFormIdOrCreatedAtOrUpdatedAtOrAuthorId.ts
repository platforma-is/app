/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * platforma-backend
 * Platforma Backend Package
 * OpenAPI spec version: 1.0.0
 */
import type { _36EnumsSucessScreen } from "./_36EnumsSucessScreen";

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickFormExcludeKeyofFormIdOrCreatedAtOrUpdatedAtOrAuthorId {
  active: boolean;
  customUrlError: string;
  customUrlSuccess: string;
  emailNotification: boolean;
  emailNotificationMails: string[];
  folder: string;
  spamProtected: boolean;
  successScreen: _36EnumsSucessScreen;
  title: string;
}