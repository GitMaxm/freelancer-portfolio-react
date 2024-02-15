const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут <em>Максим</em></strong><br />
                    я frontend-разработчик
                </h1>
                <div className="header__text">
                    <p>со страстью к обучению и творчеству.</p>
                </div>
                <a target="_blank"
                    href="https://kislovodsk.hh.ru/applicant/resumes/view?resume=13813e49ff0b87afde0039ed1f68456973776c"
                    className="btn">Резюме на hh.ru</a>
            </div>
        </header>
    );
}

export default Header;