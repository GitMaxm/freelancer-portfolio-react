const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Локация</h2>
                        <p>Москва, Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79996928652">+7 (999) 642-86-52</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">E-mail</h2>
                        <p><a href="mailto:ivanmax29@yandex.ru">ivanmax29@yandex.ru</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;