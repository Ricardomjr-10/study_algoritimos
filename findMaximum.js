const array1 = [4, 2, 3]
const array2 = [1, 1, 2, 3]
const array3 = [1, 4]

// function findMaximum (arr) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

function maxEqualSum(piles) {
    const n1 = piles[0].length;
    const n2 = piles[1].length;
    const n3 = piles[2].length;
  
    // Inicializando a matriz DP com -Infinity
    const dp = new Array(n1 + 1).fill(null).map(() => new Array(n2 + 1).fill(null).map(() => -Infinity));
    dp[0][0][0] = 0;
  
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            for (let k = 1; k <= n3; k++) {
                dp[i][j][k] = Math.max(
                    dp[i - 1][j][k],
                    dp[i][j - 1][k],
                    dp[i][j][k - 1]
                );
                if (piles[0][i - 1] === piles[1][j - 1] && piles[1][j - 1] === piles[2][k - 1]) {
                    dp[i][j][k] = Math.max(
                        dp[i][j][k],
                        piles[0][i - 1] + piles[1][j - 1] + piles[2][k - 1] + dp[i - 1][j - 1][k - 1]
                    );
                }
            }
        }
    }
  
    return dp[n1][n2][n3];
  }

console.log(maxEqualSum([[3, 1, 2], [4, 1, 4], [2, 2, 2]]))