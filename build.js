const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });

fs.copyFileSync("app.js", "dist/app.js");

console.log("Build completed successfully.");