
import Header from '../Shared/Header/Header';
import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <>
        <header className='max-w-screen-xl mx-auto'>
            <Header/>
        </header>
        <main>
            <Home/>
        </main>
            
        </>
    );
};

export default Main;