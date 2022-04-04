import axios from 'axios';
import { useState, createContext, useEffect } from 'react';



const NoticiasContext = createContext();


const NoticasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
        const consultarApi = async () => {
            const URL = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            try {
                const { data } = await axios.get(URL)
                setTotalNoticias(data.totalResults);
                setNoticias(data.articles);
                setPage(1);
            } catch (error) {
                console.log(error);
                console.log(error?.response);
            }
        }
        consultarApi();
    }, [categoria]);


    useEffect(() => {
        const consultarApi = async () => {
            const URL = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            try {
                const { data } = await axios.get(URL)
                setTotalNoticias(data.totalResults);
                setNoticias(data.articles);
            } catch (error) {
                console.log(error);
                console.log(error?.response);
            }
        }
        consultarApi();
    }, [page]);



    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    }


    const handleChangePagina = (e, value) => {
        const paginaActual = e.target.textContent;
        setPage(value)

    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                page

            }}
        >
            {children}
        </NoticiasContext.Provider>
    )

}

export {
    NoticasProvider
}

export default NoticiasContext;


