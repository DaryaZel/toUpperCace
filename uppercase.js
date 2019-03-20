let text = prompt("Введите текст")

function upperCase() {
    let textArray = text.split('')
    for (let i = -1; i < textArray.length; i++) {
        if (textArray[i] == " " || i === -1) {

            textArray[i + 1] = textArray[i + 1].toUpperCase()
        }
    }
    return textArray.join('')
}
alert(upperCase())

