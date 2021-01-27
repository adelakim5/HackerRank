function diagonalDifference(arr) {
  // Write your code here
  const n = arr.length;
  let [left, right] = [0, 0];
  for (let i = 0; i < n; i++) {
    left += arr[i][i];
    right += arr[i][n - 1 - i];
  }
  return Math.abs(left - right);
}
