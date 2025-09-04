console.log("hii");
console.log("hello");
console.log("world");



console.log("This is a test script .");


let a=3;
console.log("The value of a is: " + a);

// longest common subsequence
function lcs(X, Y) {    
    let m = X.length;
    let n = Y.length;
    let L = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                L[i][j] = L[i - 1][j - 1] + 1;
            } else {
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
            }
        }
    }

    return L[m][n];
}

//rps 
function playRPS(player1, player2) {
    const choices = ["rock", "paper", "scissors"];
    if (!choices.includes(player1) || !choices.includes(player2)) {
        return "Invalid choice!";
    }
    
    if (player1 === player2) {
        return "It's a tie!";
    }
    
    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Example usage of lcs
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log("Length of LCS is: " + lcs(str1, str2));
// Example usage of playRPS
console.log(playRPS("rock", "scissors")); // Player 1 wins!


//Two sum problem
function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}



///roman to integer
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];
        
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        
        prevValue = currentValue;
    }

    return total;
}





console.log("hii mihir");


//sum of two numbers
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}


////difference of two numbers
function differenceOfTwoNumbers(num1, num2) {
    return num1 - num2;
}


///print linkdlist
function printLinkedList(head) {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    return result.join(" -> ");
}


console.log("hello world");


localStorage.setItem("name", "Mihir");
localStorage.setItem("age", "21");

console.log("Data stored in localStorage.");
console.log("Name: " + localStorage.getItem("name"));
