

const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth" // Smooth scrolling
        });
    }
};
export default scrollToElement;
