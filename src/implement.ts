// selection sort

let array = [9, 36, 45, 58, 65, 64, 77, 88, 89, 90, 100];



class SolveProblem {
    array: number[];
    evenElements: number[];
    doubleEvenElements: number[];
    evenElementsLength: number;

    constructor(array: number[]) {
        this.array = array;
        this.evenElements = [];
        this.doubleEvenElements = [];
        this.evenElementsLength = 0;
    };

    findEvenElements() {
        let tempVar = 0;
        for (let i = 0; i < this.array.length; i++) {
            if ((this.array[i] % 2) === 0) {
                this.evenElements[tempVar++] = this.array[i];
            };
        }

        console.log("all even elements", this.evenElements);
    };

    makeEvenElementDouble() {
        let tempVar = 0;
        for (let i = 0; i < this.evenElements.length; i++) {
            this.doubleEvenElements[tempVar++] = this.evenElements[i] * 2;;
        }

        console.log("all even double elements", this.doubleEvenElements);
    }

    lengthOfEvenElements() {
        for (let i = 0; i < this.doubleEvenElements.length; i++) {
            this.evenElementsLength += 1;
        }

        console.log("Length of Double Elements - ", this.evenElementsLength);
    };
};


const solveProblem = new SolveProblem(array);
solveProblem.findEvenElements()
solveProblem.makeEvenElementDouble()
solveProblem.lengthOfEvenElements()