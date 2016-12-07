/**
 * Created by jinlei on 2016/11/28.
 */
export function draw(id) {
    let canvas = document.getElementById(id)
    let context = canvas.getContext('2d')
    context.fillStyle = "rgb(0, 0, 255)"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "rgb(255, 255, 0)"
    context.fillRect(10,20,50,50)
}

export function imgSave(id) {
    let canvas = document.getElementById(id)
    let data = canvas.toDataURL("image/jpg")
    data = data.replace("data:image/jpg;base64,","")
    let xhr = new XMLHttpRequest()
    xhr.open('POST','')
    xhr.send(data)

}