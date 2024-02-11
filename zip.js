function isMinnesotaZip(code) {
    // All MN zip are between 55001 and 56763
    if (code >= 55001 && code <= 56763){
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip('55415'))
console.log(isMinnesotaZip('53213'))
console.log(isMinnesotaZip('55001'))
console.log(isMinnesotaZip('999999999'))

