import * as React from 'react';
import SocialAside from '../SocialAside/SocialAside';

const Nav = ({ refs }) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const [scrollBottom, setScrollBottom] = React.useState(0);
    const [scrolling, setScrolling] = React.useState(false);
    const [scrollingOnFooter, setScrollingOnFooter] = React.useState(false);

    React.useEffect(() => {
        const onScroll = e => {
            let footerHeight = refs.footer.current.getBoundingClientRect().height;
            let windowHeight = window.innerHeight;
            setScrollTop(e.target.documentElement.scrollTop);
            setScrollBottom(e.target.documentElement.getBoundingClientRect().bottom);
            setScrolling(scrollTop > windowHeight * 0.75);
            setScrollingOnFooter(scrollBottom - (windowHeight / 2 + 50) <= footerHeight);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);


    return (
        <nav className={(scrolling ? "bg-white border-gray-200 border xl:border-transparent  xl:bg-transparent" : "") + " fixed top-0 flex justify-between items-center w-full p-3 z-50 px-5  md:px-10 xl:px-20"} >
            <img src={require('../../images/profile.jpg')} className={(!scrolling ? "scale-0" : "scale-1 xl:scale-0") + " transition-all bg-transparent transform w-6 h-6 rounded-full shadow-md"} />
            <SocialAside hidden={scrollingOnFooter} />
        </nav >
    );
};

export default Nav;