export const Http = () => {
    async function PostData(url, data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async function UpdateData(url,id, data = {}) {
        const response = await fetch(url + '/' + id, {
            method: 'PUT',
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async function GetData(url) {
        const response = await fetch(url)
        const responseJSON = await response.json()
        return responseJSON;
    }

    return {PostData, UpdateData, GetData};
}