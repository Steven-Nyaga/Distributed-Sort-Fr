import axios from 'axios';
import { getNextNode } from './loadBalancer';

// export const apiClient = axios.create({
//     baseURL: 'http://localhost:8080'
// });

// export const apiClient = axios.create({
//     baseURL: 'http://192.168.72.250:3030'
// });

export const apiClient = axios.create({
    baseURL: 'http://192.168.72.134:3030'
})

// Loadbalancer
export const createLoadApiClient = () => {
    return axios.create({
        baseURL: getNextNode()
    });
};

// Retry logic
export const sendRequestWithRetry = async (config, maxRetries = 3) => {
    let attempts = 0;
    let lastError = null;

    while (attempts < maxRetries) {
        const loadApiClient = createLoadApiClient();
        try {
            const response = await loadApiClient.request(config);
            return response;
        } catch (error) {
            lastError = error;
            console.error(`Request failed with node ${loadApiClient.defaults.baseURL}, retrying...`);
            attempts++;
        }
    }
    throw lastError;
};
