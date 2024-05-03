
import Header from '../Shared/Header/Header';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
        <header className='max-w-screen-xl mx-auto'>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
            
        </>
    );
};

export default Main;