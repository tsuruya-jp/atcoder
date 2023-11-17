function Main(req) {
  const arrayReq = req.split('');
  const judge = arrayReq.filter((v) => {
    if (v == 1) return 1;
  })

  console.log(judge.length)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
