function partialTax(value, percentage) { return Math.floor(value * percentage); };

function lbttCalculator(price) {
    if (price.includes(',') && price.includes('.')) price = price.replace(",","");
    let priceInt = parseInt(price);
    if (priceInt <= 0) return "It should be a value greater than 0."
    if (priceInt <= 145000) return "The LBTT value to be paid is £0";
    let tax = 0;
    let rangeList = [
        {
            value: 750000,
            percentage: 0.12
        },
        {
            value: 325000,
            percentage: 0.10
        },
        {
            value: 250000,
            percentage: 0.05
        },
        {
            value: 145000,
            percentage: 0.02
        }
    ];
    
    rangeList.forEach((limit) => {
        if (priceInt > limit.value) {
            tax += partialTax(priceInt - limit.value, limit.percentage);
            priceInt -= (priceInt - limit.value);
        };
    });
    
    return `The LBTT value to be paid is £${tax.toFixed(2)}`;
};

export default  lbttCalculator;


