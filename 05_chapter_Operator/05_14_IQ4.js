let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);  // Response : 850 - Within SLA ✅
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);  // What is the SLA time? - 1000