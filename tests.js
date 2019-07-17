
let n = 10000;

for(let i = 0; i <= 10; i++) {

  setInterval(function() {
    print(i, function(err, res){
      console.log(res);
    })
  },
  Math.random() * n + 1 );
}

function print (number, done) {
  return (done(null, number));
}