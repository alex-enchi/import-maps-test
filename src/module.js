let glob = "global string " + Date.now();
const listeners = [];
export default {
    add: (func) => listeners.push(func),
    foo:() => glob,
    update: (val) => {
        glob = val;
        listeners.forEach(func => func())
    }
};
