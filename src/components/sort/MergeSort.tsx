
import { useAppStore } from "../../lib/store";
import SortView from "../views/sort";
import delay from "@/helper";
export default function MergeSort() {
    const { array ,setArray,speed,toggleIsProcessing} = useAppStore()
    async function MergeSortFunction() {
        await toggleIsProcessing();
        let arrayBar = document.getElementsByClassName("arrayElement") as HTMLCollectionOf<HTMLElement>;

        await mergeSort(array, 0, array.length - 1);

        async function mergeSort(array: number[], l: number, r: number) {
            if (l < r) {
                let m = Math.floor((l + r) / 2);

                await mergeSort(array, l, m);
                await mergeSort(array, m + 1, r);

                await merge(array, l, m, r);
            }
        }

        async function merge(array: number[], l: number, m: number, r: number) {
            let i, j, k;
            let n1 = m - l + 1;
            let n2 = r - m;

            let L = new Array(n1);
            let R = new Array(n2);

            for (i = 0; i < n1; i++) {
                L[i] = array[l + i];
            }
            for (j = 0; j < n2; j++) {
                R[j] = array[m + 1 + j];
            }

            i = 0;
            j = 0;
            k = l;
            while (i < n1 && j < n2) {
                arrayBar[k].classList.add("bg-blue");
                arrayBar[k + 1].classList.add("bg-blue");

                await delay(speed);

                if (L[i] <= R[j]) {
                    arrayBar[k].classList.add("bg-green");
                    arrayBar[k + 1].classList.add("bg-green");
                    array[k] = L[i];
                    i++;
                } else {
                    arrayBar[k].classList.add("bg-red");
                    arrayBar[k + 1].classList.add("bg-red");
                    array[k] = R[j];
                    j++;
                }
                setArray(array);
                await delay(speed);

                arrayBar[k].classList.remove("bg-blue","bg-red","bg-green");
                arrayBar[k].classList.add("bg-gray");
                arrayBar[k + 1].classList.remove("bg-blue","bg-red","bg-green");
                arrayBar[k + 1].classList.add("bg-gray");
                k++;
            }

            while (i < n1) {
                array[k] = L[i];
                i++;
                k++;
            }

            while (j < n2) {
                array[k] = R[j];
                j++;
                k++;
            }
        }

        await toggleIsProcessing();
    }
    return (
        <SortView name="Merge Sort" method={MergeSortFunction} />
    );
}
