const fs = require("fs-extra");

module.exports = (phase, { defaultConfig }) => {
  let configuration = require("./events/default/default.json");

  if (process.env.EVENT) {
    let event = process.env.EVENT;
    configuration = require(`./events/${event}/${event}.json`);
    fs.copySync(`./events/${event}/${event}.css`, "./styles/globals.css");
    fs.copySync(`./events/${event}/assets`, "./public/assets");
  } else {
    fs.copySync(`./events/default/default.css`, "./styles/globals.css");
  }

  return {
    publicRuntimeConfig: {
      ...configuration,
    },
  };
};
