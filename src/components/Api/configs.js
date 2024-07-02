// export const NODES = [
//     'http://localhost:8080',
//     'http://<Node-2-IP>:5000',
//     'http://<Node-3-IP>:5000'
// ];

export const NODES = [
    'http://localhost:8080',
    'http://192.168.134.250:3030',
    'http://192.168.134.134:3030'
];

export const nodeStatus = NODES.reduce((acc, node) => {
    acc[node] = true; // All nodes are initially considered healthy
    return acc;
}, {});
