// require('dotenv').config();
// let apikey = process.env.APIKEY
// console.log(apikey);

// Pick date, Sync date & data
// document.getElementById("APOD-inputDate").addEventListener('change', async function () {
//     const date = this.value;
//     if (date) {
//         try {
//             const data = getData(date);
//             displayData(data);
//         } catch {
//             console.error('Error Fetching Date:', error);
//         }
//     }
// });

async function getData(date, apikey) {
    try {
        // -- NASA API
        // Astronomy Picture of the Day
        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apikey}`
        );

        const APODServer = await result.json()

        // HTML calls
        const apodTitle = document.querySelector("#APOD-title");
        const apodDate = document.querySelector("#APOD-date");
        const apodContent = document.querySelector("#APOD-content");

        // HTML ADD
        // -- Heading
        apodTitle.innerHTML = `${APODServer.title}`;
        apodDate.innerHTML = `${APODServer.date}`;

        // -- Content
        // Image/Video
        if (APODServer.media_type === 'image') {
            apodContent.innerHTML = `
                <img src="${APODServer.url}" alt="${APODServer.title}"/>
                `;
        } else if (APODServer.media_type === 'video') {
            apodContent.innerHTML = `
                <iframe src="${APODServer.url}" alt="${APODServer.title} frameborder="0" allowfullscreen></iframe>
            `;
        }

        // Explanation
        apodContent.innerHTML += `
            <p>${APODServer.explanation}</p>
        `;

        // -- Calendar
        // const datePicker = document.querySelector("#APOD-inputDate").value = `2024-06-12`;
        // console.log(datePicker);

    } catch (error) {
        console.log(`Error: `, error);
    }
}

getData('', 'M1btDj4lbefGAvrMNonTpVOFazU2kdxkNz5WfWvU');