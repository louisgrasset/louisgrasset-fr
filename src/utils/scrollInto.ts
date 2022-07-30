import { RefObject } from "react";
import { RefElements } from "../types";

const scrollInto = (element?: RefObject<RefElements>) => {
    if (element?.current) {
        element.current.dispatchEvent(new Event("scroll"));
        element.current.scrollIntoView({ behavior: "smooth" });
    }
};

export default scrollInto;
