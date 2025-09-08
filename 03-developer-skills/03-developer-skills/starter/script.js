// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const messyExample = function (name, age) {
    if (age >= 18) {
        return 'Hello ' + name + ', you are an adult';
    } else {
        return 'Hello ' + name + ', you are a minor';
    }
};

console.log('Current messy code example:', messyExample('John', 25));
console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

function testExtensions() {
    const extensionTests = [
        { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
        { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
        {
            name: 'Auto Rename Tag',
            status: 'installed',
            purpose: 'HTML efficiency',
        },
    ];

    return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

const prettierTest = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    skills: ['JavaScript', 'React', 'Node.js'],
    isActive: true,
};

const messyFunction = function (x, y, z) {
    if (x > 0 && y > 0) {
        return x + y + z;
    } else {
        return 0;
    }
};

const messyArrow = (items) => {
    return items.map((item) => {
        return item.toUpperCase();
    });
};

console.log('Before Prettier formatting - this code works but looks unprofessional');
