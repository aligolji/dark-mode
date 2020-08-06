import useLocalStorage from './useLocalStorage';

const useDarkMode = (darkModeKey) => {
    const [darkMode, setDarkMode] = useLocalStorage(darkModeKey, false);

    return [darkMode, setDarkMode];
};

export default useDarkMode;