const { getBabelConfig } = require("./configs/babel");

module.exports = (api) => {
  const isTest = api.env("test");

  return getBabelConfig(isTest, false);
};
