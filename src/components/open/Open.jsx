import './Open.scss'
import Wrapper from "../wrapper/Wrapper"
import Img1 from "../../assets/open-1.webp"
import Img2 from "../../assets/open-2.webp"

const Open = () => {
  return <section className="open">
    <Wrapper className='open__container'>
        <div className="open__first">
            <div>
                <img src={Img1} alt="" />
            </div>
            <div className="open__text">
                <h2>The best day starts here </h2>
                <p>they are very soft and don't leave anywhere there is any pain. 
                    He likes to take care of his family. The exercise will come to fruition
                </p>
            </div>
        </div>
        <div className="open__second">
           
            <div className="open__text">
                <h2>Open everyday </h2>
                <p>they are very soft and don't leave anywhere there is any pain. 
                    He likes to take care of his family. The exercise will come to fruition
                </p>
            </div>
            <div>
                <img src={Img2} alt="" />
            </div>
        </div>
    </Wrapper>
  </section>
}

export default Open