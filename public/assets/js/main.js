async function getData(apikey) {
    try {
        const result = await fetch(
            `https://api.nasa.gov/EPIC/api/natural?api_key=${apikey}`
        );
        const epicServer = await result.json();

        const content = document.querySelector("#EPIC");
        content.innerHTML = `
        <p> 
            <img src="${epicServer.image} " alt="${epicServer.caption} "/>
            ${epicServer.caption} 
        </p>
    `;
    } catch (error) {
        console.log(`Error: `, error);
    }
}

getData('M1btDj4lbefGAvrMNonTpVOFazU2kdxkNz5WfWvU');