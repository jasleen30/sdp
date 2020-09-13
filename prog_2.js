
var evenSum =0;
var oddSum =0;

var count = function() {
	console.log('test');
	for (var i = 1; i <= 100; i++) {
		if (i % 2 === 0) {
      
      evenSum += i;
    } else {
      oddSum += i;
    }
	}
  
  document.write(`The sum of all even numbers is:  ${evenSum} \n`);
  document.write(`The sum of all odd numbers is:  ${oddSum}`);
  
}

count();
