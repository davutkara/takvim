const Navigator = require("./navigator");
class Screen extends Navigator {
  onResize(callback) {
    process.stdout.on("resize", () => {
      callback.call(this, process.stdout.columns, process.stdout.rows);
    });
  }
}

module.exports = Screen;
