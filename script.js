const getData = async () => {
    const data = await fetch('./data.json');
    return await data.json()
}

const getDay = () => {
    const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const date = new Date
    return weekday[date.getDay()]
}

const createChart = async () => {
    const todayDay = getDay();
    const element = document.getElementById("chart-container")
    const chartData = await getData()
    await Object.values(chartData).forEach(day => {
        let active = "";
        const height = Math.floor(parseInt(day.amount) * 4);
        if (day.day === todayDay) {
            active = "active-bar"
        }
        element.innerHTML += `<div class="bar-container" > 
                                <div class="bar ${active}" style="height: ${height}px">
                                <p id="${day.day}-text" class="bar-amount-text hidden">$${day.amount}</p>
                                </div>
                                <div class="bar-text-container">
                                    <p class="bar-text">${day.day}</p>
                                </div>
                              </div>`
    })
}

createChart()