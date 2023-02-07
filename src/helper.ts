export default function delay (speed:number){
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, speed);
    })
}