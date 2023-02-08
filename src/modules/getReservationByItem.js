import axios from "axios"

const baseUrl ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'

export const getReservationByItem = async (item) =>{
    const endpoint = `apps/kpvz19cjHtM9ksn2bg7S/reservations?item_id=${item}`
    try {
        const res = await axios.get(baseUrl+endpoint);
        const result = res.data
        const totalReserveByItem = document.getElementById('total_reserve')
        const reservationDetailsByItem = document.getElementById('reservation_details')   
        totalReserveByItem.innerHTML = `Reservation(${result.length})`
        reservationDetailsByItem.innerHTML= result.map((elt)=>`<li>${elt.date_start}-${elt.date_end} by ${elt.username}</li>`).join('')
        return ;
      } catch (error) {
        console.error('There was an error!', error);
      }
}