/**
 * Created by jinlei on 2016/11/28.
 */
export function showFileName(id) {
    let file
    let fileClone, fileClone2, fileChunkFormEnd, fileChunkFormStart
    for(let i = 0, len = document.getElementById(id).files.length; i< len; i++){
       file = document.getElementById(id).files[i]
       console.info(file)
       fileClone = file.slice()
       fileClone2 = file.slice(0, file.size,'image/png')
       fileChunkFormEnd = file.slice(-(Math.round(file.size/2)))
       fileChunkFormStart = file.slice(0, Math.round(file.size/2),'image/png')
        console.info(fileClone)
        console.info(fileClone2)
        console.info(fileChunkFormEnd)
        console.info(fileChunkFormStart)
    }
}

export function Blob_test(tt,res) {
    let text = document.getElementById(tt).value;
    let blob
    let result = document.getElementById(res)
    if(!window.Blob) {
        result.innerHTML='浏览器不支持使用Blbo对象'
    }else{
        blob = new Blob([text])
        if(window.URL) {
          result.innerHTML = '<a download href="'+
              window.URL.createObjectURL(blob)+
                ' " target ="_blank">文件下载</a>'
        }
    }
}