import './Footer.scss'
import Logo from '../../assets/logo.svg'
import Wrapper from "../wrapper/Wrapper"
const Footer = () => {
  return <section className="footer">
    <div className="footer__container">
        <Wrapper>
            <img src={Logo} alt="" />
            <ul className="footer__links">
                <li>Home</li>
                <li>About Us</li>
                <li>Menu</li>
                <li>Reservation</li>
            </ul>
        </Wrapper>
    </div>
  </section>
}

export default Footer