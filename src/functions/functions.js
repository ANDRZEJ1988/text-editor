export const myFunction=(textList, tence,  arg1, arg2, arg3)=>{
    const copy = textList.slice();
    const word = tence.split(' ');
    for (let text of copy) {
        for (let arrAElement of word) {
            if (text.txt === arrAElement) {
                if (arg1)
                {text.color = arg1;}
                if (arg2)
                {text.fontSize = arg2;}
                if (arg3)
                {text.background = arg3;}
            }
        }
    }
    return copy;
}