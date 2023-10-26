export type IResponse = {
  id: string;
  formId: string;
  data: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
};

export type IForm = {
  id: string;
  title: string;
  updatedAt: Date;
  createdAt: Date;
  responses: IResponse[];
  active: boolean;
  author: {
    name: string;
    email: string;
  } | null;
};
