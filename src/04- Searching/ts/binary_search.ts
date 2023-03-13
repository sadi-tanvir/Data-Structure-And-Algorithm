// recursive approach
let data: number[] = [9, 35, 45, 55, 58, 65, 67, 77, 88, 89, 90, 100];

let target: number = 45;
let start: number = 0;
let end: number = data.length - 1;
let position: undefined | number = undefined;


function binary(data: number[], start: number, end: number): any {
    let mid: number = Math.floor((start + end) / 2);

    if (data[mid] === target) {
        position = mid;
        return;
    } else if (data[mid] < target) {
        binary(data, mid + 1, end);
    } else {
        binary(data, start, mid - 1);
    };
};

binary(data, start, end);

console.log('the position is -', position);


// iterative approach
/* 
let data: number[] = [9, 35, 45, 55, 58, 65, 67, 77, 88, 89, 90, 100];

let target = 55;
let start: number = 0;
let end: number = data.length - 1;
let position: undefined | number = undefined;



while (start <= end) {
    let mid: number = Math.floor((start + end) / 2);

    if (data[mid] === target) {
        position = mid;
        break;
    } else if (data[mid] < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    };
};

console.log('the position is -', position); */