var submit = document.getElementById('submit');

submit.onclick = function calculate() {

    const a = document.getElementById('A').value;
    const b = document.getElementById('B').value;
    const c = document.getElementById('C').value;
    
    const posoutput = document.getElementById('out1');
    const negoutput = document.getElementById('out2');

    const pos = (-b + Math.sqrt((b*b) - (4 * a * c))) / 2*a;

    const posRat = `(${-b} + sqrt(${b*b - (4 * a * c)}) / ${2 * a}`;

    const neg = (-b - Math.sqrt((b*b) - (4 * a * c))) / 2*a;

    const negRat = `(${-b} - sqrt(${b*b - (4 * a * c)}) / ${2 * a}`;

    posoutput.innerHTML = ``;
    negoutput.innerHTML = ``;

    if(a.length > 0 && b.length > 0 && c.length > 0){

        if(!Number.isNaN(pos)){
            posoutput.innerHTML = `pos zero: ${Number(pos).toFixed(3)} OR ${posRat}`;
        }

        if(!Number.isNaN(neg)){
            negoutput.innerHTML += `neg zero: ${Number(neg).toFixed(3)} OR ${negRat}`;
        }

        if(Number.isNaN(pos) && Number.isNaN(neg)){
            posoutput.innerHTML += `this input has no zeroes`
        }

    }else{

        posoutput.innerHTML += "please enter "

        if(a.length == 0){
            posoutput.innerHTML += " A "
        }

        if(b.length == 0){
            posoutput.innerHTML += " B "
        }

        if(c.length == 0){
            posoutput.innerHTML += " C "
        }
    }
}