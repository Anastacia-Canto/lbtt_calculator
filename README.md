# lbtt_calculator

<img src="https://img.shields.io/badge/JavaScript-_-7FFF00"> <img src="https://img.shields.io/badge/Node.JS-_-7FFF00"> <img src="https://img.shields.io/badge/Jest-_-7FFF00">

"Land and Buildings Transaction Tax (LBTT) is a tax applied to residential and commercial land and buildings transactions where a chargeable interest is acquired.
LBTT replaced UK Stamp Duty Land Tax (SDLT) in Scotland from 1 April 2015. 
The structure of LBTT is designed so that the charge is more proportionate to the actual price of the property. The percentage rate for each band in LBTT is applied
only to the part of the price over the relevatn threshold and up to the next threshold." (https://www.revenue.scot/taxes/land-buildings-transaction-tax)

This project intended to create a program that receive a purchase price and returns the total tax that should be paid.
There are several variables that can influence the final tax, but this is a simple program that cover only the case below:
 - The buyer currently owns a property as your main residence. It means it is not a first-time buyer case. 
 - The house is for personal use only. 
 - The buyer does not own any other property.
 - The buyer is selling the actual property in the same day of purchasing the new one. So, at the end, the buyer still owns only one property. 

The project was developed in JavaScript, Node.JS and using Jest to Unit Tests. 

There are a lot of online LBTT calculators that you can use to compare the results. 
Suggestion: https://revenue.scot/calculate-tax/calculate-property-transactions#calculator

# Instructions

To clone the project:

> git clone https://github.com/Anastacia-Canto/lbtt_calculator.git

To calculate the total tax:

> node lbtt.js [value]

To run the unit tests:

> npm test
