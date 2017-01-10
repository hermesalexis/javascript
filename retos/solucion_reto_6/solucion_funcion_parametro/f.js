function transform(values, f){
	var result = [];
	values.forEach(function(value){
      result.push(f(value));
	});

  return result;
}

var duplicate = function(i) { return i * 2; };
console.log(transform([1, 2, 3], duplicate));


var increase = function(i) { return i + 10; };
console.log(transform([1, 2, 3], increase));