const fs = require("fs");
const glob = require("glob");
const { calculate } = require("gzipped");
const defaultPath = "./dist/*.js";

module.exports = {
  routes: {
    get: {
      "js-size": async (req, res) => {
        const config = req.app.locals.config;

        const pattern = config.jsBudgetPath || defaultPath;

        const g = glob(pattern, { stat: true }, (er, files) => {});

        let size = 0;
        g.on("stat", (path, stat) => {
          size += stat.size;
        });
        g.on("end", () => {
          res.send({ size });
        });
      },
      gzipped: async (req, rest) => {
        /*merge with above endpoint*/
        const config = req.app.locals.config;

        const pattern = config.jsBudgetPath || defaultPath;

        const g = glob(pattern, { stat: true }, (er, files) => {});

        g.on("stat", path => {
          calculate(fs.createReadStream(path), console.log);
        });
      }
    }
  }
};
