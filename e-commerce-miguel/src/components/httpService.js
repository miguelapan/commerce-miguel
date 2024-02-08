const handleHttpError = (error) => console.error(error);
const handleResponse = async(response) => {
    if(!response.ok) {
        return handleHttpError('Http error');
    }
    try{
        const data = await response.json()
        return { data }
    }
    catch(error){
        console.error(error)
        return handleHttpError('json parsingn error');
        }
}

// MESSAGE AND ORDERS 

export const httpService = {
    get: async (url, token) => {
        const response = await fetch(`${url}`, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            return handleHttpError('http error');
        }
        console.log('IN FETCH: GET ORDERS COMPLETE')
        return handleResponse(response)
    },
    post: async (url, message, token) => {
        console.log("HTTPSSERVICE " + url + message + token)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(message)
        })
        if(!response.ok){
            return handleHttpError('RESPONSE POST MESSAGE NOT OK')
        }
        console.log(message)
        console.log('POST MESSAGE OK!')
        return handleResponse(response)
    }
}


// AUTHENTICATION 

export const authService = {
    post: async (url, data) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            return handleHttpError('RESPONSE POST AUTH NOT OK')
        }
        console.log('auth ok')
        return handleResponse(response)
    }
}