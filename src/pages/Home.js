import me from './../img/me.jpg'
import Header from '../components/header/Header';


const Home = () => {
    return (
        <>
            <Header />

            <main className="section">

                <div className="container">
                    <h1 className="title-1">Обо мне</h1>

                    <div className="about">

                        <img src={me} alt="me" className="about-img" />

                        <div className="about-text">
                            <p>В начале 2023 года я успешно закончил обучение на курсе “Быстрый старт. Программист”, где получил
                                базовые знания в
                                области HTML, CSS и JavaScript. С тех пор я продолжаю активно развивать свои навыки верстки,
                                работая
                                с
                                макетами из Figma. Для верстки использую Gulp и препроцессор SCSS, что позволяет
                                автоматизировать
                                рутинные задачи.
                            </p>

                            <p>Мне нравится не только верстать сайты, но и постоянно расширять свой кругозор в
                                программировании. В
                                данный момент, помимо изучения frontend-разработки, я работаю системным администратором -
                                занимаюсь
                                техподдержкой офисной техники и организацией корпоративных мероприятий.
                            </p>

                            <p>Сейчас я углубленно изучаю JavaScript, чтобы в дальнейшем создавать не только
                                интерактивные элементы
                                сайтов, но и более крупные веб-приложения на React, Webpack и других современных фреймворках.
                                Моя
                                цель -
                                стать квалифицированным frontend-разработчиком.
                            </p>
                        </div>
                    </div>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Навыки</h2>
                            <p>HTML, CSS, JavaScript</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Инструменты</h2>
                            <p>Gulp, SCSS, Webpack</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;