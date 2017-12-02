module.exports = function main(inputs,answer)
{
    let i;
    let j;
    let A = 0;
    let B = 0;
    for(i=0;i<inputs.length;i++){
        if(inputs[i]===answer[i]){
            A++;
            continue;
        }
        for(j=0;j<answer.length;j++){
            if(inputs[i]===answer[j])
            {
                B++;
                break;
            }
        }
    }
    return A.toString()+"A"+B.toString()+"B";
};