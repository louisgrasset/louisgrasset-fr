import { RefObject } from 'react';

const scrollInto = (element: RefObject<any>) => {
    element.current.dispatchEvent(new Event('scroll'));
    element.current.scrollIntoView(true, { behavior: "smooth" });
};

export default scrollInto;