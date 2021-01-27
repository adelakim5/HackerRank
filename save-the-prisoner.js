function saveThePrisoner(n, m, s) {
  const ans = (s + m - 1) % n;
  return !ans ? n : ans;
}
