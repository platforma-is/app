module.exports = {
  platforma: {
    input: "swagger.json",
    output: {
      mode: "tags-split",
      prettier: true,
      client: "react-query",
      target: "shared/api/gen",
      schemas: "shared/api/model",
      fileExtension: ".api.ts",
      override: {
        mutator: {
          path: "shared/api/mutator/custom-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
};
