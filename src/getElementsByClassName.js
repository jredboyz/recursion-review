// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*
I: className, children
O: array of Elements
C:
E: invalid classname
*/
var getElementsByClassName = function(className) {
  //create result array
  let result = [];
  //create recurring function with element parameter
  let recurFunc = function (element) {
    if (element.classList) {
      console.log(element.classList)
      for(let i = 0; i < element.classList.length; i++) {
        //if className matches target
        if (element.classList[i] === className) {
          //push to result array
          result.push(element);
        }
      }
    }
    //if element has no children
    if (element.childNodes.length === 0) {
      console.log('lenght')
      //return
      return;
    }
    //iterate over the element.childnodes
    for (let i = 0; i < element.childNodes.length; i++) {
      //call recurrsive function on each element
      // console.log(i)
      recurFunc(element.childNodes[i])
    }
  }
  //invoke recurring function
  recurFunc(document.body);
  //return result
  console.log(result)
  return result;
};


//  document.body, element.childNodes, and element.classList

// classList.value

// document.body.childNodes.length