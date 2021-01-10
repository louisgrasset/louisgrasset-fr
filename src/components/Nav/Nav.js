import * as React from 'react';
import SocialAside from '../SocialAside/SocialAside';

const Nav = ({ refs, scrolling, setScrolling }) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const [scrollBottom, setScrollBottom] = React.useState(0);
    const [scrollingOnFooter, setScrollingOnFooter] = React.useState(false);

    React.useEffect(() => {
        const onScroll = e => {
            let windowHeight = window.innerHeight;
            setScrollTop(e.target.documentElement.scrollTop);
            setScrollBottom(e.target.documentElement.getBoundingClientRect().bottom);
            setScrolling(scrollTop > windowHeight * 0.75);
            if (refs.footer.current) {
                let footerHeight = refs.footer.current.getBoundingClientRect().height;
                setScrollingOnFooter(scrollBottom - (windowHeight / 2 + 50) <= footerHeight);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop, scrollBottom, setScrolling, refs]);


    return (
        <nav className={(scrolling ? " border-gray-200 xl:border-transparent  xl:bg-transparent" : "") + " fixed top-0 flex justify-between items-center w-full p-3 z-40 px-5  md:px-10 xl:px-20 border-b border-transparent transition-all bg-transparent"} >
            <div style={{ zIndex: '-1' }} className={(scrolling ? "show" : "") + " origin-top absolute left-0 w-full h-full bg-white opacity-0"} ></div>

            <img src={require('../../images/profile.jpg')} alt="Louis Grasset" className={(!scrolling ? "scale-0" : "scale-1 xl:scale-0") + " transition-all bg-transparent transform w-6 h-6 rounded-full shadow-md"} />
            <SocialAside hidden={scrollingOnFooter} />

        </nav >
    );
};

export default Nav;