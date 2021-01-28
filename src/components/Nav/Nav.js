import * as React from 'react';
import { SocialAside } from '../SocialAside';
import socials from '../../data/socials';

export const Nav = ({ refs }) => {
    const [scrollBottom, setScrollBottom] = React.useState(0);
    const [scrolling, setScrolling] = React.useState(false);
    const [scrollingOnFooter, setScrollingOnFooter] = React.useState(false);

    React.useEffect(() => {
        const onScroll = e => {
            let windowHeight = window.innerHeight;
            let scrollTop = document.documentElement.scrollTop;
            setScrollBottom(document.documentElement.getBoundingClientRect().bottom);
            setScrolling(scrollTop > windowHeight * 0.75);
            if (refs.footer.current) {
                let footerHeight = refs.footer.current.getBoundingClientRect().height;
                setScrollingOnFooter(scrollBottom - (windowHeight / 2 + (socials.length * (36 + 8) / 2)) <= footerHeight);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollBottom, setScrolling, refs]);

    return (
        <nav className={"fixed top-0 left-0 w-full py-3 z-40 px-5  md:px-10 xl:px-20"}>
            <div style={{ zIndex: '-1' }} className={(scrolling ? "show  border-gray-200 dark:border-gray-800 " : "") + "origin-top  absolute left-0 w-full h-full  bg-white dark:bg-gray-900  opacity-0 -mt-3  xl:hidden  border-b border-transparent xl:border-transparent transition-all"} ></div>
            <div style={{ gridTemplateColumns: `24px 1fr ${socials.length * 36}px` }} className="grid items-center grid-flow-col">
                <img src={require('../../images/profile.jpg')} alt="Louis Grasset" className={(!scrolling ? "scale-0" : "scale-1 xl:hidden") + " duration-200 transition-all bg-transparent transform w-6 h-6 rounded-full shadow-md"} />
                <div className="h-6 overflow-x-hidden font-semibold xl:invisible" >
                    <span className={(scrolling ? "opacity-100 translate-x-3 " : "-translate-x-24 ") + "opacity-0 block transform transition-all ease-out dark:text-white"}>Louis Grasset</span>
                </div>
                <SocialAside hidden={scrollingOnFooter} />
            </div>
        </nav>
    );
};
