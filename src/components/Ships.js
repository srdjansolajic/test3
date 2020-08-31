import { getShips } from "../service";

export const selectBox = document.createElement('select');
selectBox.className = 'form-control';
selectBox.id = 'exampleFormControlSelect1'

    const option0 = document.createElement('option');
    option0.textContent = '-';
    selectBox.appendChild(option0)

    const option1 = document.createElement('option');
    option1.textContent = 'Aktivan';
    selectBox.appendChild(option1)

    const option2 = document.createElement('option');
    option2.textContent = 'Nije aktivan';
    selectBox.appendChild(option2)


export const Ships = () => {

    const divContainer = document.querySelector('#container');

    
    
    getShips().then(res => {
        // console.log(res.data);
        res.data.forEach(el => {
            
            const divInfo = document.createElement('div')
            divInfo.id = 'divInfo'

                const div1 = document.createElement('div')
                div1.textContent = `SHIP NAME : ${el.ship_name}`

                const div2 = document.createElement('div');
                div2.textContent = `SHIP TIPE : ${el.ship_type}`

                const div3 = document.createElement('div');
                div3.textContent = `SHIP STATUS : ${el.active}`

                const div4 = document.createElement('div');
                div4.innerHTML = `<a href='${el.url}' target="_blank"><img src='${el.image}'></a>`

                divInfo.append(div1, div2, div3, div4)

            divContainer.appendChild(divInfo)

        });

    })

    return divContainer
}
