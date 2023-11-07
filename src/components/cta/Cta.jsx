import "./Cta.scss"
import Wrapper from "../wrapper/Wrapper"
import Img from "../../assets/cta-1.svg"
const Cta = () => {
  return <section className="cta">
    <Wrapper>
      <div className="cta__container">
        <div className="cta__flex">
          <img src={Img} alt="" className="cta__img" />
          <div className="cta__text">
            <h2>
              Try our special desserts
            </h2>
            <button className="button-primary">
              Go To Menu
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
}

export default Cta