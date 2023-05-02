import ReactDOM from 'react-dom'
import Familia from './components/Familia'
import Membro from './components/Membro'
import FamiliaCastello from './components/FamiliaCastello'

const elemento = document.getElementById('root')

ReactDOM.render(
    <>
        <Familia sobrenome='Pererira'>
            <Membro nome='Andre' sobrenome='Pereira'/>
            <Membro nome='Marina' sobrenome='Pereira'/>
        </Familia>
        <FamiliaCastello sobrenome='Castello'/>
    </>
, elemento)

//ReactDOM.render(<FamiliaCastello/>, elemento)

// ReactDOM.render(
//     <div>
//         <MultiElementos/>
//     </div>
// , elemento)

// ReactDOM.render(
//     <ul>
//         <li>1- João</li>
//         <li>2- Pedro</li>
//         <li>3- Ana</li>
//     </ul>
// , elemento)

