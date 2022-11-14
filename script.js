const getData = async () => {
    const data = await fetch('./data.json');
    return await data.json()
}


const createChart = async () => {
    const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const date = new Date
    const todayDay = weekday[date.getDay()]
    const element = document.getElementById("chart-container")
    const chartData = await getData()
    await Object.values(chartData).forEach(day => {
        let active = "";
        const height = Math.floor(parseInt(day.amount) * 3);
        if (day.day === todayDay) {
            active = "active-bar"
        }
        element.innerHTML += `<div class="bar-container">
                                <div class="bar ${active}" style="height: ${height}px"></div>
                                <div class="bar-text-container">
                                    <p class="bar-text">${day.day}</p>
                                </div>
                              </div>`
    })
}

createChart()