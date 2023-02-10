const getCount = () => {
    const list = document.querySelectorAll(".shown-comment");
    const counted = list.length;
    return counted;
}

export default getCount