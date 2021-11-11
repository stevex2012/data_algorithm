var arr = [5,4,9,2,7,1,3,6,0,8]

// console.log('arr', arr)

function parttern(arr, left, right){
  let tmp = arr[left];
  while(left < right){
    // 右侧开始
    while(left < right && arr[right] >= tmp){
      right -= 1;
    }
    arr[left] = arr[right];
    // console.log(arr, 'right')
    while(left < right && arr[left] <= tmp){
      left += 1;
    }
    arr[right] = arr[left];
    // console.log(arr, 'left')
    // 左侧
  }
  arr[left] = tmp;
  console.log('arr',arr)
  return left;

}
// parttern(arr, 0, arr.length  -1)

// parttern(arr, 0, 4);
// parttern(arr, 6, arr.length  -1);



function quickSort(arr, left, right){
  const mid = parttern(arr, left, right);
  console.log('mid', mid)
  // while()
  left <= mid -1 && quickSort(arr, left, mid-1)
  right >= mid +1 && quickSort(arr, mid+1, right)
  // quickSort(arr, mid+1, right)

}

quickSort(arr, 0 ,arr.length  -1)
console.log('sort ---', arr)

