const scrollInto = (element) => {
    element.current.scrollIntoView({ behavior: "smooth" });
};

export default scrollInto;