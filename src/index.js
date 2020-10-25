module.exports = function reverse (n) {
    const str = String(n);
    const result = str.split('').reverse().join('');
    return parseInt(result, 10);
}