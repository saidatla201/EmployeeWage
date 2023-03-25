const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HOUR=20;
const NUMBER_WRKNG_DAYS=10;
const MAX_HRS=100;


function getWorkingHours(empCheck)
{
switch(empCheck)
{
case IS_PART_TIME:
emphrs=PART_TIME_HRS;
break;

case IS_FULL_TIME:
    emphrs=FULL_TIME_HRS;
    break;

    default:
        return 0;
}
}

let emphrs=0;
let totalemphrs=0;
let totalWorkingDays=0;

while(totalemphrs<=MAX_HRS&& totalWorkingDays<NUMBER_WRKNG_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10%3)
        totalemphrs+=getWorkingHours(empCheck)

    }

let empCheck=Math.floor(Math.random()*10)%3;

emphrs=getWorkingHours(empCheck);

let empwage=emphrs*WAGE_PER_HOUR;
console.log("wage per month:"+empwage);




