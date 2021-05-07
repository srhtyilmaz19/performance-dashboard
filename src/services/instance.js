const headers = {
    "Content-Type": "application/json",
}

const BASE_URL = 'http://localhost:5555/api/v1/metrics'
// const BASE_URL = 'http://localhost:5555/api/v1/metrics/'

const fetchInstance = async (body) => {
    try {
        return await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then(responseJson => responseJson);
    } catch (err) {
        return err
    }
};


export {fetchInstance};
