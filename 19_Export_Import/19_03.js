// 25-08-2026

import { BASE_URL as bul_util, formatTestName,formatTestName2 } from "./19_04_utils.js";
import { BASE_URL as bul_testful, formatUpperCaseString } from "./19_02_testutil.js";

console.log(bul_util);  // https://api.example.com
console.log(bul_testful);  // https://app.vwo.com
console.log(formatTestName("Login"));  // TC_LOGIN
console.log(formatTestName2("Logged In"));  // TC_LOGGED IN