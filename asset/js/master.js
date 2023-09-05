function _btn() {
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById('input3').value = ''
    document.getElementById('input4').value = ''
    document.getElementById('input8').value = ''
    document.getElementById('input9').value = ''
    document.getElementById('input10').value = ''
    document.getElementById('card').value = ''
    document.getElementById('Expiration1').value = ''
    document.getElementById('Expiration2').value = ''
    document.getElementById('code').value = ''
}
document.getElementById('cards').addEventListener('input', (e) => {
    let x = e.target.value
    if (x.length <= 16) {
        document.getElementById('input1').value = x.substring(0, 4)
        document.getElementById('input2').value = x.substring(4, 8)
        document.getElementById('input3').value = x.substring(8, 12)
        document.getElementById('input4').value = x.substring(12, 16)

    } else {
        x = x.substring(0, 16)
    }
})
document.getElementById('Expiration1').addEventListener('input', (e) => {
    let x = e.target.value
    if (x.length <= 2) {
        document.getElementById('input8').value = x
    } else {
        e.target.value = x.substring(0, 2)

    }
})
document.getElementById('Expiration2').addEventListener('input', (e) => {
    let x = e.target.value
    if (x.length <= 2) {
        document.getElementById('input9').value = x
    } else {
        e.target.value = x.substring(0, 2)
    }
})
document.getElementById('code').addEventListener('input', (e) => {
    let x = e.target.value
    if (x.length <= 3) {
        document.getElementById('input10').value = x
    } else {
        e.target.value = x.substring(0, 3)
    }
})
