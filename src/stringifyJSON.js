// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // input: object
  // output: string of parameter object
  // constraints: use recursion (handles nesting)
  // edge cases:
    // stringifiable: should handle some response for arrays (empty also), null,
              // boolean, string, floats, ints
    // unstringifiable: functions, undefined

  // variable to store result
  var result = ""
  // variable that stores primitives (string, number, boolean, null)
  var primitives = ['number', 'boolean']
  // variable to store iteration of object
  var objectIndex = 0;
    // i = 0

  // base case
  if (primitives.includes(typeof obj)) {
    // variable includes type of obj and return the stringified version of obj
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"'
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return;
  }
  // check for unstringifiable types as well and do something

  if (Array.isArray(obj)) {
    // add [ to result
    result += '[';

    if (obj.length === 0) {
      return '[]';
    }

    for (var i = 0; i < obj.length; i++) {
    // loop through array recurse and add to result with each element
      result += stringifyJSON(obj[i]);

      if (i === obj.length - 1) {
        // if last element, add ]
        result += ']'
      } else {
        // if not last element, add comma
        result += ','
      }
    }
    return result;
  }

  // add { to result
  result += '{';

  if (Object.keys(obj).length === 0) {
    return '{}';
  }
  // for of loop through object
  for (var key in obj) {
    if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
      continue;
    }
    // add key and : to result
    result += '"' + key + '"' + ':';

    // recurse on value
    result += stringifyJSON(obj[key])

    if (objectIndex !== Object.keys(obj).length - 1) {
      // if not last element, add comma
      result += ','
    }
    objectIndex++;
  }
  result += '}'
  return result
};

// i = 0
// key = a
// value = 1
// comma added
// "{a:1,b:2"
// i = 1
// key = b
// value = 2
// comma not added
// {a: 1, b: 2}

// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];

// unstringifiableValues = [
//   {
//     'functions': function() {},
//     'undefined': undefined
//   }
// ];