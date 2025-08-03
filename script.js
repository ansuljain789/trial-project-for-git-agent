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