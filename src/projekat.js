const selekt = document.querySelector('#selekt')
const rashodiCont = document.querySelector('rashodiUkupno')
const rashodiLista = document.querySelector('#rashodiLista')
const prihodiLista = document.querySelector('#prihodiLista')
const div = document.querySelector('div')


let opis = document.querySelector('#opis')
let iznos = document.querySelector('#iznos')

import {items1,items2} from './moduli.js'
import {formatNumber,sumArray,removee,removeee} from './moduli.js'

let dugme = document.querySelector('#unosDugme')
dugme.addEventListener('click', (e) => {
    e.preventDefault()

    let sel = selekt.value
    let opis = document.querySelector('#opis')
    let iznos = document.querySelector('#iznos')

    if (opis.value == '') {
        alert("Obavezno je popuniti polje opis")
        return
    }
    if (iznos.value <= 0) {
        alert("Uneli ste pogresan iznos")
        return
    }


    if (sel == 'Prihodi') {
        let par = document.createElement('div')
        par.className = 'list1cont'
        let par1 = document.createElement('div')
        par1.className = 'div1'
        let obrisi = document.createElement('button')
        obrisi.className = 'obrisi1'
        obrisi.innerHTML = 'x'
        
        par.appendChild(par1)
        par.appendChild(obrisi)
        prihodiLista.appendChild(par)
        par1.innerHTML = `${opis.value} +${formatNumber(iznos.value)}`
        items1.push(iznos.value * 1);

        let sum1 = items1.reduce(sumArray);
     
        document.getElementById('prihodiUkupno').innerHTML = `${formatNumber(sum1)} `

        obrisi.addEventListener('click', removee)


    }


    if (sel == 'Rashodi') {
        let parr = document.createElement('div')
        parr.className = 'list2cont'


        let sum1 = items1.reduce(sumArray);
        if (sum1 == 0) { alert('Unesite prvo prihode'); return }
        let par2 = document.createElement('div')
        par2.className = 'div2'

        let obrisi1 = document.createElement('button')
        obrisi1.className = 'obrisi2'
        obrisi1.innerHTML = 'x'
        parr.appendChild(par2)
        parr.appendChild(obrisi1)
        rashodiLista.appendChild(parr)
        let procenat = (iznos.value * 100 / sum1).toFixed(2)


        par2.innerHTML = `${opis.value} -${formatNumber(iznos.value)} (${procenat}%)`

        items2.push(iznos.value * 1 - iznos.value * 2);

        let sum2 = items2.reduce(sumArray);

        let procenat2 = (-sum2 * 100 / sum1).toFixed(2)


        document.getElementById('rashodiUkupno').innerHTML = `${formatNumber(sum2)}  (${procenat2}%)`

        obrisi1.addEventListener('click', removeee)


    }

    let items3 = items1.concat(items2)
    let sum3 = items3.reduce(sumArray);

    document.getElementById('stanjeUkupno').innerHTML = `${formatNumber(sum3)}`



})




