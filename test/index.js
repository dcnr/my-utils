const specs = {
  multiples : require('./utils/multiples-spec'),
  fib: require('./utils/fibonacci-spec'),
};


specs[process.env.TEST]();
