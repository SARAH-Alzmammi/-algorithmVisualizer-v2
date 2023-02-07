

import {useAppStore} from "@/lib/store";

interface SortView{
    name: string;
    method: () => void;
}

export default function SortView({name, method}: SortView) {
    const { array ,size,changeSize,changeSpeed,speed,isProcessing} = useAppStore()
const speedOptions =['fast','medium','slow'];
const arraySizeOptions =[5,7,10,15];
    return (
        <div className="text-white  w-3/5 mx-auto p-4 flex flex-col items-center ">
            <div className={`mb-12 ${isProcessing ? 'opacity-25' : ''} `}>
                <div >
                    <p  className="py-3">Speed:</p>
                    <ul className="flex gap-2">
                        {speedOptions.map((speedOption, idx) => {
                            return (
                                <li key={idx}
                                    className={`px-2 py-1 text-sm text-white rounded-lg shadow  cursor-pointer  
                                     ${idx==0 && speed==250 || idx==1 && speed==1000 || idx==2 && speed==2000?'bg-background shadow-neutral-700':'bg-gray'}
                                     `}
                                    onClick={ e => isProcessing ? e.preventDefault() :   changeSpeed(idx == 0 ? 250 : idx == 1 ? 1000 : idx == 2 ? 2000 : 100)
                                    }


                                >{speedOption}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <p className="py-3">Number of elements :</p>

                    <ul className="flex gap-2 ">
                        {arraySizeOptions.map((arraySizeOption, idx) => {
                            return (
                                <li
                                    key={idx}
                                    onClick={ e => isProcessing ? e.preventDefault() :changeSize(arraySizeOption)}
                                        className={`px-2 py-1 text-sm  text-white  rounded-lg shadow  cursor-pointer ${arraySizeOption==size?'bg-background shadow-neutral-700':'bg-gray'}   `}

                                >
                                    {arraySizeOption}
                                </li>
                            )})
                        }
                    </ul>
                </div>
                <button  className="mt-7 px-2 py-1 text-sm  text-white  rounded-lg shadow  cursor-pointer bg-gray w-fit disabled:opacity-25" onClick={method} disabled={isProcessing}>SORT</button >

            </div>

            <div className="flex flex-col  gap-5 " >

      <div className='flex justify-center items-center w-fit mx-auto'>
          <div className="flex gap-2   items-end w-11/12  mx-auto "  >
              {array.map((value:number, idx:number) => {
                  return (
                      <div key={idx} className="flex justify-items-end bg-gray  w-8 rounded  text-white arrayElement transition-all justify-center"   style={{
                          height: `${value+50}px`,
                      }}>
                          <span className="text-center">     {value}</span>
                      </div>
                  )
              })}
          </div>

      </div>


            </div>
        </div>
    );
}
