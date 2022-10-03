import { age, addAge } from "./export.js";

addAge();
console.log(age); // 19


age = 1;
// TypeError: Assignment to constant variable.
//   at file:js-module/example/value/esm/index.js:7:5
//   at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
// at async Promise.all (index 0)
// at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
// at async loadESM (node:internal/process/esm_loader:88:5)
// at async handleMainPromise (node:internal/modules/run_main:61:12)


