/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {

    function isSameType(_o1, _o2) {
        if (typeof o1 === 'object') {
            return Object.prototype.toString.call(_o1) === Object.prototype.toString.call(_o2)
        } else {
            return typeof _o1 === typeof _o2
        }
    }

    if (typeof o1 !== typeof o2) return false
    if (isSameType(o1, o2) === false) return false
    if (o1 === null && o2 === null) return true
    if (typeof o1 !== 'object') return o1 === o2
    const _len1 = Object.keys(o1).length
    const _len2 = Object.keys(o2).length
    if (_len1 != _len2) return false
    for (let key in o1) {
        const _n1 = o1[key]
        const _n2 = o2[key]
        if (typeof _n1 !== typeof _n2) return false

        if (isSameType(_n1, _n2)) {
            const flag = areDeeplyEqual(_n1, _n2)
            if (flag === false) return false
        } else {
            if (_n1 !== _n2) return false
        }
    }

    return true
};

const params1 = { "0": 1 }

const params2 = [1]

const result = areDeeplyEqual(params1, params2)

console.log(result)
