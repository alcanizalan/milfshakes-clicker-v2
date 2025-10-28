

export function formatCost(cost, suffixes) {
    let coste = cost;
    let digits = 0;
    let suffix = "";

    while (coste >= 1000){
        coste = coste / 1000;
        digits = digits + 1;
    } 
    suffix = suffixes[digits];
    if (digits>=1){
      coste = Math.floor(coste*100)/100
    }else{
      coste = Math.floor(coste)
    }
    
    let resultadoFormateo = coste + "" + suffix;
    return resultadoFormateo;
}