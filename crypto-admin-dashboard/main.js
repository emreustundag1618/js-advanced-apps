const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'BTC',
                data: [29384, 33537, 49631, 59095, 57828, 36684, 39974, 48847, 48116, 61004, 74453, 45566],
                borderColor: 'red',
                borderWidth: 2 
            },
            {
                label: 'ETH',
                data: [31500, 32164, 42312, 12345, 45655, 12456, 54566, 45456, 36546, 65566, 74453, 45566],
                borderColor: 'blue',
                borderWidth: 2
            },
        ]
    },
    options: {
        responsive: true
    }
})

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener("click", () => {
    sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    sidebar.style.display = "none"
})

// change theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector("span:first-child").classList.toggle("active");
    themeBtn.querySelector("span:last-child").classList.toggle("active");
})