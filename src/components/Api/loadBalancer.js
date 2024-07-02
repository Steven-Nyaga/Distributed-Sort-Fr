import { NODES, nodeStatus } from './configs';

let currentNodeIndex = 0;

export const getNextNode = () => {
    const healthyNodes = NODES.filter(node => nodeStatus[node]);
    //console.log(`Healthy nodes: ${healthyNodes}`);
    if (healthyNodes.length === 0) {
        throw new Error('No healthy nodes available');
    }
    const node = healthyNodes[currentNodeIndex];
    currentNodeIndex = (currentNodeIndex + 1) % healthyNodes.length;
    console.log(`Current node being used: ${node}`);
    return node;
};
