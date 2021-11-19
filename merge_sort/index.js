// 归并排序
// 分解 [1,3,5, 2,4,6]
// 排序

function doMerge(li, low, mid, high){
  let i = low;
  let j = mid + 1;
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
  console.log('---resArr', resArr)
}

function mergeSort(li, low, high){

  if(low < high){
    const mid = Math.floor((high - low)/2+low);
    console.log('mid', mid)
    mergeSort(li, low, mid);
    mergeSort(li, mid+1, high);
    doMerge(li, low, mid, high);
  }

}

const arr = [1,3,5, 7, 2,4,6];

console.log('arr.length -1', arr.length -1)

mergeSort(arr, 0, arr.length -1);
