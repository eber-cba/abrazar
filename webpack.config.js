module.exports = {
    //...
    externals: {
      react: 'react',
    },
  
    // or
  
    externals: {
      lodash: {
        commonjs: 'lodash',
        amd: 'lodash',
        root: '_', // indicates global variable
      },
    },
  
    // or
  
    externals: {
      subtract: {
        root: ['math', 'subtract'],
      },
    },
  };