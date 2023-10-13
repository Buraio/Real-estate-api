"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.listen(2222, () => {
    console.log("----------------------------------");
    console.log(`Server is running on port ${2222}`);
});
