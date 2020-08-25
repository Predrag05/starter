let items1 = [0];
let items2 = [];

export {items1,items2}


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function sumArray(total, value) {
    return total + value;
}


function removee(e) {

    let obrisi = e.target
    let divtoremove1 = obrisi.parentElement
    divtoremove1.remove();
}

function removeee(a) {
    let obrisi1 = a.target
    let divtoremove2 = obrisi1.parentElement
    divtoremove2.remove();
}

export {formatNumber,sumArray,removee,removeee}