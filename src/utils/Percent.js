const Percent = (items, each) => {
    let hap = 0;
    items.forEach((item) => (hap += item.ehPrice));
    return Math.floor(each / hap);
};

export default Percent;
