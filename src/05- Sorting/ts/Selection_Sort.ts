let selection_array = [45, 9, 55, 67, 89, 90, 100, 65, 88, 77, 35];


class SelectionSort {
    minIndex: number;
    constructor() {
        this.minIndex = 0;
    }

    sortArray(data: number[]) {
        for (let i = 0; i < data.length; i++) {
            this.minIndex = i;

            for (let j = i + 1; j < data.length; j++) {
                if (data[this.minIndex] > data[j]) {
                    this.minIndex = j;
                }
            }

            let temp = data[i];
            data[i] = data[this.minIndex];
            data[this.minIndex] = temp;
        }

        console.log(data)
    }
}

const selectionSort = new SelectionSort()
selectionSort.sortArray(selection_array)