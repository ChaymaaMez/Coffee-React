import './Reservation.scss'
import Wrapper from "../wrapper/Wrapper"
import Img from '../../assets/reservation.webp'
const Reservation = () => {
  return <section className="reservation">
    <Wrapper className='reservation__container'>
        <div className="reservation__left">
            <img src={Img} alt="" />
        </div>
        <div className="reservation__right">
            <h2>Make a <br />Reservation </h2>
            <form action="">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="number" placeholder='phone' />
                <button className="button-primary">Reserver</button>
            </form>
        </div>
    </Wrapper>
  </section>
}

export default Reservation