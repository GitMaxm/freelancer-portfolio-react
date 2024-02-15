import vk from './../../img/icons/vk.svg'
import telegram from './../../img/icons/telegram.svg'
import instagram from './../../img/icons/instagram.svg'
import gitHub from './../../img/icons/gitHub.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a target="_blank" href="https://vk.com/ivanenkomax"><img
                                src={vk} alt="vk" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a target="_blank"
                                href="https://instagram.com/imax_iv?igshid=YmMyMTA2M2Y="><img
                                    src={instagram} alt="instagram" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a target="_blank" href="https://t.me/sonyfox"><img
                                src={telegram} alt="telegram" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a target="_blank" href="https://github.com/GitMaxm"><img
                                src={gitHub} alt="gitHub" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;