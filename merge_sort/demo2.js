// 假设是一个mid左边和右边都是排好序的
function merge(arr,low, mid,high) {
  let i = low;
  let j = mid+1;
  let resArr = [];
  while (i<= mid && j<=high) {
    if(arr[i] < arr[j]){
      resArr.push(arr[i])
      i++
    }else{
      resArr.push(arr[j])
      j++
    }
  }
  console.log('i',i)
  console.log('j',j)
  // 剩下的 arr low === high = resArr
  resArr = resArr.concat(arr.slice(i,mid)).concat(arr.slice(j))
  console.log('--resArr', resArr)
  let ii = 0;
  while(low < high){
    arr[low] = resArr[ii]
  }
  return resArr;

}
// const arr = [1,3,5,2,4,6,7];
const arr = [1,5,7,3,4,6,8];
// merge(arr, 0, 2, arr.length -1 )

function mergeSort(arr, low, high) {
  if(arr.length === 1)return arr;
  console.log('low', low)
  console.log('high', high)
  while(low< high){
    const mid = Math.floor((high - low)/2);
    mergeSort(arr, low,mid)
    mergeSort(arr, mid+1,high)
    merge(arr, low, mid, high)
  }
  
  // merge(arr, low, mid, high)
}

mergeSort(arr, 0, arr.length -1)
console.log('---arr', arr)