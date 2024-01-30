import HomePage from "@/src/pages/HomePage";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const forms = await prisma.form.findMany({
    include: {
      responses: true,
    },
  });

  return {
    props: { forms },
  };
};

export default HomePage;
