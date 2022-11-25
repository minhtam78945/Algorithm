function merge(left, right, array) {
    let nLeft = left.length;
    let nRight = right.length;

    let i = 0, j = 0, k = 0;
    while (i < nLeft && j < nRight) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++;
        }
        else {
            array[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < nLeft) {
        array[k] = left[i];
        i++; k++;
    }
    while (j < nRight) {
        array[k] = right[j];
        j++; k++;
    }
}

function mergeSort(array) {
    if (array.length < 2)
        return;

    let mid = Math.floor(array.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < mid; i++)
        left.push(array[i]);
    for (let j = mid; j < array.length; j++)
        right.push(array[j]);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, array);
}
let q = [];
for (let i = 0; i < 1000; i++) {
    q.push(Math.floor(Math.random() * 100));
}
console.log(q);

let start = new Date();
mergeSort(q);
let end = new Date();
let duration = end.getTime() - start.getTime();
console.log(q);
console.log("Duration: " + duration * 1000000 + "ms");