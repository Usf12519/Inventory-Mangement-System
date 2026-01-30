let itemName = ("HDMI Cord")
let unitCost = (4.50);
let currentStock = (150);
let reorderLevel = (375);
let targetStock = (250);
let weeklyDemand = (50);
let supplierLeadTimeWeeks = (2);

let weeksOfCover = (weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity);
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks ? Math.ceil(stockDeficit) :0);
let estimatedReorderCost = (reorderQuantity * unitCost);
let reorderNow = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks);


console.log(itemName);
console.log(weeksOfCover.toFixed(2));
console.log(reorderNow);
console.log(reorderQuantity);
console.log(estimatedReorderCost.toFixed(2));
console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2));



