function isOneEdit(strA: string, strB: string): boolean {
    // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
    if (Math.abs(strB.length - strA.length) > 1) return false

    // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
    if (strA.length > strB.length) return strA.includes(strB)
    if (strB.length > strA.length) return strB.includes(strA)

    let charsDiffCount = 0
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]) charsDiffCount++
    }
    // Retorna true se a diferença é 1, false caso contrário
    console.log(charsDiffCount);
    return charsDiffCount === 1
}

