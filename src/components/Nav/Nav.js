import * as React from 'react';
import SocialAside from '../SocialAside/SocialAside';

const Nav = () => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const [scrolling, setScrolling] = React.useState(false);

    React.useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(scrollTop > window.innerHeight * 0.75);
        };
        window.addEventListener("scroll", onScroll);
        console.log(scrollTop);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);


    return (
        <nav className={(scrolling ? "bg-white border-gray-200 border xl:border-transparent xl:bg-transparent" : "") + " fixed top-0 flex justify-between items-center w-full p-3 z-50 px-5  md:px-10 xl:px-20"} >
            <img src={require('../../images/profile.jpg')} className={(!scrolling ? "scale-0" : "scale-1 xl:scale-0") + " transition-all bg-transparent transform w-6 h-6 rounded-full shadow-md"} />
            <SocialAside />
        </nav >
    );
};

export default Nav;