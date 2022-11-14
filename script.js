const getData = async () => {
    const data = await fetch('./data.json');
    const dataJson = await data.json();
    await console.log(dataJson);
}

getData();