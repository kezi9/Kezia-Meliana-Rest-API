async function getData(apikey) {
    try {
        const result = await fetch(
            `https://api.nasa.gov/insight_weather/?api_key=${apikey}&feedtype=json&ver=1.0`
        );
        const infoFromServer = await result.json();

        const content = document.querySelector("insight-weather");
        content.innerHTML = `
        <p> ${infoFromServer.validity_checks.sol_hours_required}
    `;
    } catch (error) {
        console.log('Error: ', error);
    }
}

getData('M1btDj4lbefGAvrMNonTpVOFazU2kdxkNz5WfWvU');