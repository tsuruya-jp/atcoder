function Main(req) {
  const S = req.trim();
  let result = S.replaceAll("eraser", "");
  result = result.replaceAll("erase", "");
  result = result.replaceAll("dreamer", "");
  result = result.replaceAll("dream", "");
  let res = "YES";
  if (result) res = "NO"
  console.log(res);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
