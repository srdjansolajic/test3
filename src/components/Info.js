import { getInfo } from '../service';

// const header = document.querySelector('#header');

export const Info = () => {
    
const header = document.querySelector('#header');
    
    getInfo().then(res => {

            const p1 = document.createElement('p');
            p1.textContent = `NAZIV : ${res.data.name}`

            const p2 = document.createElement('p');
            p2.textContent = `VLASNIK : ${res.data.founder}`

            const p3 = document.createElement('p');
            p3.textContent = `GODINA OSNIVANJA : ${res.data.founded}`

            header.append(p1, p2, p3)
    })

    return header
}
