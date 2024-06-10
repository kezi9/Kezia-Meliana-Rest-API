// require('dotenv').config();
// let apikey = process.env.APIKEY
// console.log(apikey);

async function getData(apikey) {
    try {
        // -- NASA API
        // Astronomy Picture of the Day
        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
        );
        // 
        const prevDate = await fetch(
            `https://api.nasa.gov/planetary/apod?date=2024-06-09&api_key=${apikey}`
        );
        const APODServer = await result.json()
        const dateServer = await prevDate.json()

        // console.log(dateServer);
        // console.log(APODServer);

        // HTML calls
        const content = document.querySelector("#APOD");
        const apodTitle = document.querySelector("#APOD-title");
        const apodDate = document.querySelector("#APOD-date");
        const apodContent = document.querySelector("#APOD-content");
        const apodInputDate = document.querySelector("#APOD-inputDate");

        // HTML ADD
        // -- Heading
        apodTitle.innerHTML = `${APODServer.title}`;
        apodDate.innerHTML = `${APODServer.date}`;

        // -- Content
        apodContent.innerHTML = `
            <img src="${APODServer.url}" alt="${APODServer.media_type}"/>
            <p>
                ${APODServer.explanation}
            </p>
        `;

        // -- Interaction
        // if {
        //     const apodInputDate = document.querySelector("#APOD-inputDate").value = "2024-06-09"

        //     apodInputDate.innerHTML = `
        //         ${dateServer.title}
        //         ${dateServer.url}
        //         ${dateServer.date}
        //         ${dateServer.explanation}
        //     `
        // } else {
        //     ''
        // };


        // example
        // content.innerHTML = `
        // <h1>${APODServer.title}</h1>
        // <img src="${APODServer.url}" alt="${APODServer.media_type}"/>
        // <p>
        //     ${APODServer.explanation}
        // </p>
        // `;
    } catch (error) {
        console.log(`Error: `, error);
    }
}

getData('M1btDj4lbefGAvrMNonTpVOFazU2kdxkNz5WfWvU');