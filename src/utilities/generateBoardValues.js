/*
    Generate cards - on first load
    possibilities: 55, 50, 25, 20, 15, 10, 5, 1, typhoon
    rare: 55, 50, 5, 1, typhoon
    At least 1 of each, 2 typhoons
*/

const generateRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max + 1));
  }

const replaceValueAtRandomIndex = (value) => {
    //generate random int 0 to 44
    const randomNum = generateRandomInt(44)
    values[randomNum] = value
}

const generateBoardValues = () => {
    containsTyphoon = false;
    containsHighScore = false;
    values = []

    for (let i = 0; i < 45; i++) {
        //generate number from 1 to 100
        const randomNum = generateRandomInt(99) + 1;
        if (randomNum <= 6) {
            values.push(55);
            containsHighScore = true;
        } else if (randomNum <= 14) {
            values.push(50);
        } else if (randomNum <= 26) {
            values.push(25);
        } else if (randomNum <= 46) {
            values.push(20);
        } else if (randomNum <= 66) {
            values.push(15);
        } else if (randomNum <= 78) {
            values.push(10);
        } else if (randomNum <= 86) {
            values.push(5);
        } else if (randomNum <= 92) {
            values.push(1);
        } else {
            values.push(-1);
            containsTyphoon = true;
        }
    }

    if (!containsTyphoon) {
        replaceValueAtRandomIndex(-1);
    }
    if (!containsHighScore) {
        replaceValueAtRandomIndex(55);
    }

    return values
}

export default generateBoardValues;