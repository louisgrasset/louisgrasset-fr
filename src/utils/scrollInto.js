const scrollInto = (element) => {
    element.current.dispatchEvent(new Event('scroll'));
    element.current.scrollIntoView(true, { behavior: "smooth" });
};

export default scrollInto;