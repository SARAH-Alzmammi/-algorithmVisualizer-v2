
import { useAppStore } from "../../lib/store";
import SortView from "../views/sort";
import delay from "@/helper";
export default function BubbleSort() {
    const { array ,setArray,speed,toggleIsProcessing} = useAppStore()
    async function BubbleSortFunction() {
        await toggleIsProcessing()
        let arrayBar = document.getElementsByClassName('arrayElement') as HTMLCollectionOf<HTMLElement>

        for (let i = 0; i < array.length - 1; i++) {

            for (let j = 0; j < array.length - i - 1; j++) {

                arrayBar[j].classList.add('bg-blue');
                arrayBar[j + 1].classList.add('bg-blue');

                await delay(speed);


                if (array[j] > array[j + 1]) {

                    arrayBar[j].classList.remove('bg-blue');
                    arrayBar[j].classList.add('bg-red');

                    arrayBar[j+1].classList.remove('bg-blue');
                    arrayBar[j+1].classList.add('bg-red');

                    await  delay(speed);
                    let temp = array[j];
                    array[j] =array[j+1];
                    array[j + 1] = temp;

                    setArray(array)
                    await  delay(speed);

                    arrayBar[j].classList.remove('bg-red');
                    arrayBar[j].classList.add('bg-gray');
                    arrayBar[j+1].classList.remove('bg-red');
                    arrayBar[j+1].classList.add('bg-gray');
                } else {
                    arrayBar[j].classList.remove('bg-blue');
                    arrayBar[j].classList.add('bg-green');
                    arrayBar[j+1].classList.remove('bg-blue');
                    arrayBar[j+1].classList.add('bg-green');

                    await  delay(speed);
                    arrayBar[j].classList.remove('bg-green');
                    arrayBar[j].classList.add('bg-gray');
                    arrayBar[j+1].classList.remove('bg-green');
                    arrayBar[j+1].classList.add('bg-gray');

                }
            }

        }
        await toggleIsProcessing()
    }
    return (
        <SortView name="Bubble Sort" method={BubbleSortFunction} />
    );
}
