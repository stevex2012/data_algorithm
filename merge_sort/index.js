// 归并排序
// 分解 [1,3,5, 2,4,6]
// 排序
//  [7,3,5, 1, 2,4,6];
// [7,3,5] [1, 2,4,6]
// [7] [3, 5], [1,2] [4,6]
// [7] [3] 5], [1] [2] [4],[6]
// 
const tArr = [1,3,5,7,2,4,6];
function doMerge(li, low, mid, high){
  // [7,3]
  // mid = 0  1-0/2 +1=0
  // i = 0
  // j = 0
  // high = 1
  let i = low;
  let j = mid+1;
  let resArr = [];
  while(i <= mid && j<= high){
    if(li[i] < li[j]){
      resArr.push(li[i])
      i+=1;
    }else {
      resArr.push(li[j])
      j+=1;
    }
  }
  // i > mid || j > high
  if(li[i] || li[j]) resArr.push(li[i] || li[j])
  
  console.log('---resArr', resArr)
  // li 从 low 到 hight 就已排好序，
}
doMerge(tArr,0,3,6)
// [3,2,1] 1-0/2 = 0 [3,2]
function mergeSort(li, low, high){
  if(li.length === 1) return li
  console.log('----low', low)
  console.log('----high', high)
  const mid =  Math.floor((high - low)/2);
  if(low < high && mid){
    
    // return [...mergeSort(li, low, mid), ...mergeSort(li, mid, high)]
    
    mergeSort(li, low, mid)
    mergeSort(li, mid+1, high)
    doMerge(li, low, mid, high);

    
  }else {
    return li
  }
  

}
//[7,3] 1-0/2 +0 = 0 
const arr = [7,3,5, 1, 2,4,6];
const arr1 = [1,3,5, 2,4,6];
// doMerge(arr1, 0, 3, arr1.length-1)
// console.log(arr1)
// const arr = [7,3];


mergeSort(arr, 0, arr.length -1);

// console.log('arr---', arr)
