function merge(left, right) {
  console.log('--left', left)
  console.log('--right', right)
  let result = []
  while(left.length >0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}

function mergeSort(arr) {
  console.log('---arr', arr)
  if(arr.length === 1) return arr;
  var middle = Math.floor(arr.length / 2);       //求出中点  
    var left = arr.slice(0, middle);               //分割数组  
    var right = arr.slice(middle); 
  return merge(mergeSort(left), mergeSort(right))
}

const arr = [32,12,56,78,76,45,36];

console.log(mergeSort(arr))