

//r
export const useHttp = () => {

    const sendRequest = async (url, method = "GET", headers = {}, body = null) => {
        if (body) {
            body = JSON.stringify(body)
            headers["Content-Type"] = "application/json"
        }
        const response = await fetch(url, {method, headers, body})
        const data = await response.json()
        return data
    }

    return sendRequest
}