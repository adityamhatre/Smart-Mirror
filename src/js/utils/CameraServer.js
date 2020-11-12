import fetchWithTimeout from "./FetchWithTimeout"

const detectFaces = () => fetchWithTimeout("http://192.168.1.169:5000/detected-faces", {
    timeout: 5000,
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8,mr;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache"
    },
    "referrer": "http://localhost:3000/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
})
export default detectFaces