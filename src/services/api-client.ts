import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '2a1afaf8dc694a31a2adfb2fde431316'
    }
})