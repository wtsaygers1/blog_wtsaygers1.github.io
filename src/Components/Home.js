import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div className='home'>
            <div className='title'>
                <h1>
                    <p>Alright...Alright...Alright...</p>
                    <p>I Am Walter Saygers</p>
                    <p>Web Developer</p>
                </h1>
                <Link to="About">
                    <button>Learn More</button>
                </Link>
            </div>
            {/* insert a logo here
            <div className='person'>
                <img/>
            </div> */}
        </div>
    );
}
