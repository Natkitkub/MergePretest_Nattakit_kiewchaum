export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0; // pointer  collection_1
  let j = 0; // pointer  collection_2
  let k = collection_3.length - 1; // pointer  collection_3 (จากท้ายไปหน้า)

  // check current value
  const val1 = () => (i < collection_1.length ? collection_1[i] : Infinity);
  const val2 = () => (j < collection_2.length ? collection_2[j] : Infinity);
  const val3 = () => (k >= 0 ? collection_3[k] : Infinity);

  // รวมค่าจนกว่าจะหมดทุกอัน
  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const v1 = val1();
    const v2 = val2();
    const v3 = val3();

    if (v1 <= v2 && v1 <= v3) {  // ex collection1  = 1,4,5 collection2 = 2,3,6 collection3 = 7,8,3 -> ascending = 3,7,8
      result.push(v1);           //       | i=0 j=0 k=2  1 2 3    choose v(1) = 1 i+1
      i++;                       //       | i=1 j=0 k=1  4 2 3    choose v(3) = 3 k-1
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2);
      j++;
    } else {
      result.push(v3);
      k--;
    }
  }

  return result; //ex result = [1,2,3,4,5,6,7,8]
}
