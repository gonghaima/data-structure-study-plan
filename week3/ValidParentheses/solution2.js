/**
 * String replacement approach (less efficient)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
        s = s.replace('()', '').replace('{}', '').replace('[]', '');
    }
    return s === '';
};

module.exports = isValid;