const specs = {
  multiples : require('./utils/multiples-spec'),
};


specs[process.env.TEST]();
