import { getGetFormsQueryKey } from "@/shared/api/gen/forms/forms.api";
import { useEffect } from "react";
import { isNotEmpty } from "ramda";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

export function useHomePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const queryKey = getGetFormsQueryKey();
  const queryCache = queryClient.getQueryCache();
  const cachedQuery = queryCache.find({ queryKey });
  const data = cachedQuery?.state?.data || [];
  const status = cachedQuery?.state?.status;

  useEffect(() => {
    if (status === "success" && isNotEmpty(data)) {
      router.push(`form/${data[0].id}`);
    }
  }, [data, status, router]);
}
