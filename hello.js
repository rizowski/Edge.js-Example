var edge = require('edge');

var helloWorld = edge.func(function() {/*
    async (input) => {
      return "Hello " + input.ToString();
    };
  */});

helloWorld('Rizowski!', function (error, result){
  if( error ) throw error;
  console.log(result);
})
