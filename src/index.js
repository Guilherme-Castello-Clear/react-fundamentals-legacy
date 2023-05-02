import ReactDOM from 'react-dom'
import Contador from './components/Contador'
const elemento = document.getElementById('root')

ReactDOM.render(
    <>
        <Contador numero={10}/>
    </>
, elemento)
