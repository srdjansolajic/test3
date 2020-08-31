import { Info } from './components/Info';
import { Ships, selectBox } from './components/Ships';
// import { getShips } from './service';


const app = document.querySelector('#app');


// getShips().then(res => {
//     res.data.forEach(el => {
//         if (el.active == true) {
//             Ships()
//         }
//     });
// })


app.append(Info(), selectBox, Ships())