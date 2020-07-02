let day = 1;
let sum = 0;
let dailyVal = 1;
let executed = false;
document.querySelector('.Day').innerHTML = 'Day ' + day;
document.querySelector('.Money').innerHTML = '$ ' + sum;

const upgrades = {
    up1: {
        name: 'Rusty Scissors', 
        value: 5, 
        cost: 5
    },
    up2: {
        name: 'Old-Timey Push Lawnmower', 
        value: 50, 
        cost: 25
    },
    up3: {
        name: 'Fancy Battery-powered Lawnmower', 
        value: 100, 
        cost: 250
    },
    up4: {
        name: 'Team of Starving Students', 
        value: 250, 
        cost: 500
    },
};

let funcNextDay = () => {
    day += 1;
    sum += dailyVal;
    document.querySelector('.Day').innerHTML = 'Day ' + day;
    document.querySelector('.Money').innerHTML = '$ ' + sum;
    funcWin();
} 

const funcRS = () => {
    if (dailyVal === upgrades.up1.value) {
        alert("You are currently using this upgrade!");
    } else if (sum >= upgrades.up1.cost) {
        sum -= upgrades.up1.cost;
        document.querySelector('.Money').innerHTML = '$ ' + sum;
        alert("You have successfully bought " + upgrades.up1.name + "!");
        dailyVal = upgrades.up1.value;
    } else alert("You don't have enough money!");
};

const funcOTP = () => {
    if (dailyVal === upgrades.up2.value) {
        alert("You are currently using this upgrade!");
    } else if (sum >= upgrades.up2.cost) {
        sum -= upgrades.up2.cost;
        document.querySelector('.Money').innerHTML = '$ ' + sum;
        alert("You have successfully bought " + upgrades.up2.name + "!");
        dailyVal = upgrades.up2.value;
    } else alert("You don't have enough money!");
};

const funcFBL = () => {
    if (dailyVal === upgrades.up3.value) {
        alert("You are currently using this upgrade!");
    } else if (sum >= upgrades.up3.cost) {
        sum -= upgrades.up3.cost;
        document.querySelector('.Money').innerHTML = '$ ' + sum;
        alert("You have successfully bought " + upgrades.up3.name + "!");
        dailyVal = upgrades.up3.value;
    } else alert("You don't have enough money!");
};

const funcTSS = () => {
    if (dailyVal === upgrades.up4.value) {
        alert("You are currently using this upgrade!");
    } else if (sum >= upgrades.up4.cost) {
        sum -= upgrades.up4.cost;
        document.querySelector('.Money').innerHTML = '$ ' + sum;
        alert("You have successfully bought " + upgrades.up4.name + "!");
        dailyVal = upgrades.up4.value;
    } else alert("You don't have enough money!");
};

const funcRestart = () => {
    day = 1;
    sum = 0;
    dailyVal = 1;
    document.querySelector('.Money').innerHTML = '$ ' + sum;
    document.querySelector('.Day').innerHTML = 'Day ' + day;
    return executed = false;
};

const funcWin = () => {
    if (sum >= 1000 && dailyVal === upgrades.up4.value && executed === false) {
        setTimeout(function(){ alert("You win! You can keep earning cash or click restart to do it all over."); }, 200);
        return executed = true;
    }
}
