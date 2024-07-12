// require('dotenv').config();
// let apikey = process.env.APIKEY
// console.log(apikey);

// Set Date
document.getElementById('APOD-inputDate').addEventListener('change', async function () {
    const date = this.value; // Get the selected date
    if (date) {
        try {
            const data = await fetchData(date); // Fetch data for the selected date
        } catch (error) {
            console.error('Error fetching APOD data:', error);
        }
    }
});

// Fetch DATA API selection date
async function fetchData(date) {
    const apiKey = 'M1btDj4lbefGAvrMNonTpVOFazU2kdxkNz5WfWvU';
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    try {
        const titleElement = document.getElementById('APOD-title');
        const contentElement = document.getElementById('APOD-content');

        // Title
        titleElement.textContent = data.title;

        // Display the image or video
        if (data.media_type === 'image') {
            contentElement.innerHTML = `<img src="${data.url}" alt="${data.title}" style="max-width: 100%;">`;
        } else if (data.media_type === 'video') {
            contentElement.innerHTML = `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
        }

        // Explanation
        contentElement.innerHTML += `<p>${data.explanation}</p>`;
    } catch (error) {
        console.log(`Error: `, error);
    }

    return data;
}

// Fetch current date + data
document.addEventListener('DOMContentLoaded', async function () {
    const today = new Date().toISOString().split('T')[0];

    // Today's date and max date
    const dateInput = document.getElementById('APOD-inputDate');
    dateInput.setAttribute('max', today);
    dateInput.value = today;
    
    try {
        const data = await fetchData(today);
    } catch (error) {
        console.error('Error fetching APOD data:', error);
    }
});
