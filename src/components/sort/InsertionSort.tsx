
import { useAppStore } from "../../lib/store";
import SortView from "../views/sort";
import delay from "@/helper";
export default function InsertionSort() {
    const { array ,setArray,speed,toggleIsProcessing} = useAppStore()
    async function InsertionSortFunction() {
        await toggleIsProcessing()
        let arrayBar = document.getElementsByClassName('arrayElement') as HTMLCollectionOf<HTMLElement>

        for (let i = 1; i < array.length; i++){

            let current = array[i];
            let j = i - 1; //before the current position

            arrayBar[i].classList.add('bg-blue');
            await delay(speed);
            while (j >= 0 && array[j] > current) {
                await delay(speed);
                array[j + 1] = array[j];
                await delay(speed);
                arrayBar[j].classList.add('bg-red');
                arrayBar[j+1].classList.add('bg-red');
                await delay(speed);

                arrayBar[j].classList.remove('bg-red','bg-blue');
                arrayBar[j+1].classList.remove('bg-red','bg-blue');
                arrayBar[j].classList.add('bg-blue');
                arrayBar[j+1].classList.add('bg-gray');
                setArray(array)
                j--;
            }
            await delay(speed);
            array[j + 1] = current;
            setArray([...array])

            arrayBar[j+1].classList.remove('bg-red','bg-blue');
            arrayBar[j+1].classList.add('bg-green');
            await delay(speed);

            arrayBar[j+1].classList.remove('bg-green','bg-blue');
            arrayBar[j+1].classList.add('bg-gray');


            arrayBar[i].classList.remove('bg-red','bg-blue');
            arrayBar[i].classList.add('bg-gray');
        }
        await toggleIsProcessing()
    }
    return (
        <SortView name="Insertion Sort" method={InsertionSortFunction} />
    );
}
