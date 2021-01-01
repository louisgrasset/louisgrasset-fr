const scrollInto = (element) => {
    element.current.dispatchEvent(new Event('scroll'));
    element.current.scrollIntoView({ behavior: "smooth" });
};

export default scrollInto;