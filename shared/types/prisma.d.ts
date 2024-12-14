import { Nstring } from "@/index"

export module "next-auth" {
    export interface Profile {
        sub?: string
        name?: string
        email?: string
        image?: string
        phone?: string
        real_name?: string
    }
    export interface Account extends Partial<TokenSet> {
        /**
         * This value depends on the type of the provider being used to create the account.
         * - oauth: The OAuth account's id, returned from the `profile()` callback.
         * - email: The user's email address.
         * - credentials: `id` returned from the `authorize()` callback
         */
        providerAccountId: string
        /** id of the user this account belongs to. */
        userId?: string
        /** id of the provider used for this account */
        provider: string
        /** Provider's type for this account */
        type: ProviderType
        email?: Nstring
      }
}

