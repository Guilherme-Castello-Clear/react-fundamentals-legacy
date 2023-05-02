import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDOM.render(
    <PrimeiroComponente valor={10} abcd={2**8} isLegal={true}/>
, elemento)

// ReactDOM.render(
//     <ul>
//         <li>1- João</li>
//         <li>2- Pedro</li>
//         <li>3- Ana</li>
//     </ul>
// , elemento)

