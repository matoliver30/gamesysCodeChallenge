export default query => {
    const res = Array.from(document.querySelectorAll(query));

    if (res.length === 0) {
        return null;
    } else if (res.length === 1) {
        return res[0];
    } else {
        return res;
    }
}