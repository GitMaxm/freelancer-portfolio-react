import { useEffect, useRef } from 'react'
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from './../../utils/detectDarkMode'

import './btnDarkMode.css'
import sun from './sun.svg'
import moon from './moon.svg'

const BtnDarkMode = () => {
    // подключение ls
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    // состояние
    // const [darkMode, setDarkMode] = useState('light');
    const btnRef = useRef(null);

    //Срабатывает при изменении состояния 
    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode])

    // Если меняются системные настройки, меняем тему. Срабаатывает один раз
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode])

    // проверяем текущее состояние 
    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={() => { toggleDarkMode() }}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}

export default BtnDarkMode;