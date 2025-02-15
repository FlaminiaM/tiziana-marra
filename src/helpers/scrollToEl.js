const scrollToEl = (elId) => {
    document.getElementById(elId).scrollIntoView({ behavior: "smooth", block: "start" });
}

export default scrollToEl;