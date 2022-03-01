let arr = [];
for(let i =1;i<=100;i++){
  arr.push(i)
}

function binary_search(arr, val){
  let low = arr[0];
  let high = arr[arr.length - 1];
  while(low < high){
    let mid = low + ((high-low)>>1);
    if(mid <val){
      low = mid +1
    }else if(mid >val){
      high = mid - 1
    }else if(mid===val){
      return mid;

    }
  }
  return -1
}
console.log(arr)
console.log(binary_search(arr, 1))

// 变种
var arr1 = [1,2,3,4,5,6,8,8,8,9,10];

function binary_sort_1(arr, val ) {
    let low = 0;
    let high = arr.length - 1;
    while(low < high){
    let mid = low + ((high-low)>>1);

      if(arr[mid] > val){
        high = mid - 1;
      }else if(arr[mid] < val){
        low = mid +1;
      }else{
        // mid == val 判断是val是否是第一个
        if((mid === 0) || (arr[mid-1] != val) ) {
          return mid;
        }else{
          high = mid - 1
        }
      }
    }
    return -1;
}
console.log(binary_sort_1(arr1,8))
