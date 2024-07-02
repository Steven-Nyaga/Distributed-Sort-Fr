import axios from 'axios';
import { nodeStatus, NODES } from './configs';

const HEALTH_CHECK_TIMEOUT = 5000; // Set timeout to 5 seconds

const checkNodeHealth = async (node) => {
    try {
        const response = await axios.get(`${node}/health-check`, {
            timeout: HEALTH_CHECK_TIMEOUT
        }); // Assuming each node has a health-check endpoint
        if (response.status === 200) {
            nodeStatus[node] = true; // Node is healthy
        } else {
            nodeStatus[node] = false; // Node is unhealthy
        }
    } catch (error) {
        nodeStatus[node] = false; // Node is unhealthy
    }
    console.log(`Health check for node ${node}: ${nodeStatus[node] ? 'healthy' : 'down'}`);
};

export const performHealthChecks = () => {
    NODES.forEach(node => {
        checkNodeHealth(node);
    });
};

// Ensure this part is called in your main entry file to initialize the health checks
performHealthChecks();
setInterval(performHealthChecks, 30000);
