import React,{Component} from 'react'
import './NotFound.scss';
import Scissors from './Scissors'

export default class NotFound extends Component {
    render() {
        return (
            <div className='notfound'>
                <Scissors/>
                <p>Nie znaleziono strony :(</p>
            </div>)
    }
}