// const { withSuperjson } = require("next-superjson");

module.exports = {
  output: "standalone",
  env: {
    BACKEND_URL : process.env.NEXT_PUBLIC_API
  }
};

// module.exports = withSuperjson()({
//     output: 'standalone'
// });
