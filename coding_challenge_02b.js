
// this is step 1: create and initialize variables
let itemname = "whoppers";
let unitcost = 2.10;
let currentstock = 60;
let reorderlevel = 75;
let targetstock = 150;
let weeklydemand = 40;
let supplierleadtimeweeks = 2;

// this is step 2: calculate inventory metrics
let weeksofcover = weeklydemand > 0 ? currentstock / weeklydemand : Infinity;

let stockdeficit = Math.max(0, targetstock - currentstock);

let reordernow = currentstock <= reorderlevel || weeksofcover < supplierleadtimeweeks;

let reorderquantity = reordernow ? Math.ceil(stockdeficit) : 0;

let estimatedreordercost = reorderquantity * unitcost;

// this is step 3: print to console
console.log("item:", itemname);
console.log("weeks of cover:", weeksofcover === Infinity ? "infinity" : weeksofcover.toFixed(2));
console.log("reorder now?", reordernow);
console.log("recommended reorder quantity:", reorderquantity);
console.log("estimated reorder cost: $" + estimatedreordercost.toFixed(2));


