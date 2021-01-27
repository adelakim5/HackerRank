function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return `NO`;
  if (x1 < x2 && v1 <= v2) return `NO`;
  let dp = [];
  dp[0] = 0;
  dp[1] = Math.abs(x1 + v1 - (x2 + v2));
  let idx = 2;
  while (true) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return `YES`;
    const d = Math.abs(x1 + v1 - (x2 + v2));
    if (dp[idx - 1] <= d) return `NO`;
    dp[idx] = d;
    idx++;
  }
}
