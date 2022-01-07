const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(n) {
  if (n <= 0) {
    return 0;
  }
  else if (n == 1) {
    return 1;
  }
  else{
    let poprzedzajaca = 1;
    let obecna = 1;
    for(let i=2;i<n;i++){
      const nastepna = poprzedzajaca + obecna;
      poprzedzajaca = obecna;
      obecna = nastepna;
    }
    return obecna;
  }
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
