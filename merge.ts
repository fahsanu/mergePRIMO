export default function merge(collection1: number[], collection2: number[]): number[] {
    const mergedAnswer: number[] = [];
    let count1 = 0;
    let count2 = 0;
  
    while (count1 < collection1.length && count2 < collection2.length) {
      if (collection1[count1] < collection2[count2]) {
        mergedAnswer.push(collection1[count1]);
        count1++;
      } else {
        mergedAnswer.push(collection2[count2]);
        count2++;
      }
    }
  
    while (count1 < collection1.length) {
        mergedAnswer.push(collection1[count1]);
        count1++;
    }
    while (count2 < collection2.length) {
        mergedAnswer.push(collection2[count2]);
        count2++;
    }
  
    return mergedAnswer;
  }
  