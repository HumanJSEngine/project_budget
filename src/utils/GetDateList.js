const GetDateList = (items) => {
    let arr = [];
    items.forEach((item) => arr.push(item.ehDate.slice(0, 10)));
    return arr;
};

export default GetDateList;
