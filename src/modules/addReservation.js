
import { v4 as uuidv4 } from 'uuid';
export const addReservation = async e =>{
    e.preventDefault();
    const name = document.getElementById('name').value ;
    const dateStart=document.getElementById('date_start').value
    const dateEnd = document.getElementById('date_end').value
    const itemId = uuidv4();
    console.log(itemId,name,dateStart,dateEnd)
}