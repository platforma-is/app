import React, { FC } from "react";
import Link from "next/link";
import { Text } from "@mantine/core";
import dayjs from "dayjs";
import { HomeFormItem } from "@/src/features/home/ui/HomeFormItem";
import { IForm } from "@/src/shared/types";

type HomePageBodyAdapterProps = {
  forms: IForm[];
};

export const HomePageBodyAdapter: FC<HomePageBodyAdapterProps> = ({
  forms,
}) => {
  const items = forms.map((form) => {
    const createdAt = dayjs().to(dayjs(form.createdAt));

    const publicLink = `${
      typeof window !== "undefined" ? window.location.origin : ""
    }/api/form/${form.id}`;

    return (
      <HomeFormItem
        key={form.id}
        form={form}
        createdAt={createdAt}
        publicLink={publicLink}
      />
    );
  });

  if (items.length === 0) {
    return (
      <Text fz="lg" fw={500}>
        No forms yet. <Link href="/create">Create</Link>
      </Text>
    );
  } else {
    return items;
  }
};
