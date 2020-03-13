/*jshint esversion: 6 */
export const paix = (obj, configs) => {
    for (let keys in configs) {
        const value = configs[keys];
        const src_keys = Object.keys(obj);
        if (src_keys.includes(keys)) {
            const src_value = obj[keys];
            delete obj[keys];
            obj[value] = src_value;
        }
    }
    return obj;
};