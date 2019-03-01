alert("Квадратне рівняння ax1^2 + bx2 + c")
const a = parseFloat(prompt("введіть а"))
const b = parseFloat(prompt("введіть b"))
const c = parseFloat(prompt("введіть c"))
const res = solveQuadro(a, b, c);
alert(res);
function solveQuadro(a, b, c){
    const d = calcDickr(a, b, c);
    if(d > 0){
       let x1 = (-b+Math.sqrt(d))/2*a; 
       let x2 = (-b-Math.sqrt(d))/2*a; 
       return "x1 = " + x1 + " x2 = " + x2;
}else if(d === 0){
    let x = -b/2*a;
    return "x1 = " + x ;
}else{
    return"Рівняння роз'вязку немає";
}
}

function calcDickr(a, b, c){
    return b*b-4*a*c;
}