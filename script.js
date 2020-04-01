function change() {
    const topLeft = document.getElementById('topLeft').value || 0
    const topRight = document.getElementById('topRight').value || 0
    const bottomLeft = document.getElementById('bottomLeft').value || 0
    const bottomRight = document.getElementById('bottomRight').value || 0

    const divBorder = document.getElementById('div-border')
    divBorder.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`

    const cssTextArea = document.getElementById('css')

    const text = `border-radius: ${divBorder.style.borderRadius};`
    cssTextArea.innerText = text

    console.log(text.length)
    cssTextArea.cols = text.length

}

function copyText() {
    const textArea = document.getElementById('css')
    textArea.select()
    document.execCommand('copy')
}