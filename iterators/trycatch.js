try {

    console.log('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    console.log('End of try (never reached)');  // (2)
  
  } catch(err) {
  
    console.log(`Error has occurred!`); // (3) <--
    console.log('22222222222222     '+err.name)
    console.log('1111111111     '+err.stack)
    console.log('1111111111     '+err.message)
  }


//   try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 1000);
//   } catch (e) {
//     console.log( "won't work" );
//   }

/* setTimeout(function() {
    try {
      noSuchVariable; // try..catch handles the error!
    } catch {
      alert( "error is caught here!" );
    }
  }, 1000); */