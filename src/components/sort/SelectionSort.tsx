
import { useAppStore } from "../../lib/store";
import SortView from "../views/sort";
import delay from "@/helper";
export default function SelectionSort() {
    const { array ,setArray,speed,toggleIsProcessing} = useAppStore()
    async function SelectionSortFunction() {
        await toggleIsProcessing()
        let arrayBar = document.getElementsByClassName('arrayElement') as HTMLCollectionOf<HTMLElement>

        for (let i = 0; i < array.length; i++) {
            let current_min = i;

            arrayBar[i].classList.add('bg-blue');

            await  delay(speed);
            for (let j = i + 1; j < array.length; j++) {
                await  delay(speed);
                arrayBar[j].classList.remove('bg-gray');
                arrayBar[j].classList.add('bg-blue');
                if (array[j] < array[current_min]) {
                    current_min = j
                }
                await  delay(speed);
                arrayBar[j].classList.remove('bg-blue');
                arrayBar[j].classList.add('bg-gray');
            }

            await delay(speed);
            arrayBar[current_min].classList.remove('bg-gray');
            arrayBar[i].classList.remove('bg-gray');

            arrayBar[current_min].classList.add(current_min==i?'bg-green':'bg-red');
            arrayBar[i].classList.add(current_min==i?'bg-green':'bg-red');

            await  delay(speed);
            let temp = array[current_min];
            array[current_min] =array[i];
            array[i] = temp;
            setArray(array)
            await  delay(speed);
            arrayBar[current_min].classList.remove('bg-red','bg-blue','bg-green');
            arrayBar[i].classList.remove('bg-red','bg-blue');
            arrayBar[i].classList.add('bg-gray');
            arrayBar[current_min].classList.add('bg-gray');
        }
        await toggleIsProcessing()
    }
    return (
        <SortView name="Selection Sort" method={SelectionSortFunction} />
    );
}
