// Add your functions and code here

function destructivelyAppendKitten(name)
{
  return kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift();
}

function appendKitten(name)
{
  var temp = [];
  temp = [...kittens,name];
  return temp;
}


function prependKitten(name)
{
  var temp = [];
  temp = [name, ...kittens];
  return temp;
}