import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import FormItemPage from "@/src/pages/FormItemPage";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const form = await prisma.form.findUnique({
    where: {
      id: params?.id as string,
    },
  });

  const responses = await prisma.response.findMany({
    where: {
      formId: params?.id as string,
    },
  });

  return {
    props: { form, responses },
  };
};

export default FormItemPage;
