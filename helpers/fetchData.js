const fetchData = async (query, { variables = {} }) => {
    const headers = ({'Authorization':'Bearer x-TAqH74p3crciK0Me6pc1Bgt8JCApt9','Content-Type': 'application/json'})

    const res = await fetch('https://directus-dev.ucrop.it/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()

    if (json.errors) {
        throw new Error(json.errors)
    }

    return json
}

export default fetchData;
