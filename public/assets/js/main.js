async function getData(apikey) {
    try {
        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
        );
        const epicInfoServer = await result.json()

        // console.log(epicInfoServer);
        const content = document.querySelector("#APOD");
        content.innerHTML = `
        <h1>${epicInfoServer.title}</h1>
        <img src="${epicInfoServer.url}" alt="${epicInfoServer.media_type}"/>
        <p>
            ${epicInfoServer.explanation}
        </p>
        `;
    } catch (error) {
        console.log(`Error: `, error);
    }
}

getData('M1btDj4lbefGAvrMNonTpVOFazU2kdxkNz5WfWvU');