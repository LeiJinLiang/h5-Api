/**
 * Created by jinlei on 2016/11/28.
 */
export function readAsDataURL(fileId, resultId) {
    let file = document.getElementById(fileId).files[0]
    if (!/image\/\w+/.test(file.type)) {
        return false
    }
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
        let result = document.getElementById(resultId)
        result.innerHTML = ' <img src = "'+this.result+'" alt="" />'
    }
}

export function readAsBinaryString(fileId, resultId) {
    let file = document.getElementById(fileId).files[0]
    let reader = new FileReader()
    reader.readAsBinaryString(file)
    reader.onload = function (f) {
        let result =  document.getElementById(resultId)
        result.innerHTML = this.result
    }
}

export function readAsText(fileId, resultId) {
    let file = document.getElementById(fileId).files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function (f) {
        let result =  document.getElementById(resultId)
        result.innerHTML = this.result
    }
}
