// Write your solution here!
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  function appendCat(name) {
    return [...cats, name];
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }
  
  
  

