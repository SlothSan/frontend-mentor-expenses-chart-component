const getData = async () => {
    const data = await fetch('./data.json');
    return await data.json();
}


const createChart = async () => {
    const barCharData = await getData()
}