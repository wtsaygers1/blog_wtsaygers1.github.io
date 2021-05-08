import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function Nav(){

    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        if (width > 800){
            setOpen(true);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener('resize', trackScreenWidth);
        return() => window.removeEventListener('resize', trackScreenWidth);
    }, []);

    return (
        <nav className='nav'>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <Link to='/'>
                        <img
                            src="WallyW.png"
                            alt="brand"
                        />
                    </Link>
                </div>
                <div className='list-wrapper'>
                    <img
                        src="menu.png"
                        alt="menu bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <img
                        src="delete.png"
                        alt="delete x"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <ul style={{ left: open ? '0' : '-100vw' }}>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
