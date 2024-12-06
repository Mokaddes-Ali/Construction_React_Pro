import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: 'Home', path: 'hero' },
        { link: 'About', path: 'about' },
        { link: 'Services', path: 'services' },
        { link: 'Projects', path: 'portfolio' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
        <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
            <h1 className="text-black text-3xl md:text-4xl font-bold font-rubik">
                Construction
                <strong className="text-yellow-500 italic pl-1">Website</strong>
            </h1>

            {/* Desktop Menu */}
            <ul className="lg:flex justify-center gap-4 hidden">
                {navItems.map(({ link, path }) => (
                    <Link
                        key={path}
                        className="text-black font-bold uppercase cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
                        to={path}
                        spy={true}
                        offset={-100}
                        smooth={true}
                    >
                        {link}
                    </Link>
                ))}
            </ul>
            <button className="bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition duration-300 cursor-pointer lg:flex hidden uppercase">
            <Link to='contact' spy={true} offset={-100} smooth={true}>Book Now 
            </Link>
            </button>

            {/* Mobile Menu */}
            <div className="lg:hidden flex justify-between items-center mt-3" onClick={toggleMenu}>
                <div>
                    {isMenuOpen ? (
                        <FaTimes className="text-yellow-500 text-3xl cursor-pointer" />
                    ) : (
                        <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
                    )}
                </div>
            </div>

            <div
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } w-full h-fit bg-yellow-500 p-4 absolute top-[70px] left-0 flex-col justify-center items-center`}
            >
                <ul className="flex flex-col justify-center items-center">
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={path}
                            className="text-black font-bold uppercase cursor-pointer px-20 py-2 rounded-full  hover:bg-black hover:text-white text-[15px]"
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {link}
                        </Link>
                    ))}
                </ul>
                <button className="bg-red-700 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition duration-300 cursor-pointer uppercase">
                <Link to='contact' spy={true} offset={-100} smooth={true}>Book Now 
            </Link>
            </button>

            </div>
        </nav>
    );
};

export default Header;


