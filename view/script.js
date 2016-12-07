/**
 * Created by jinlei on 2016/11/29.
 */
onmessage = function(event) {
    //console.info(event)
    var data = event.data;
    var returnStr;
    var intArray = data.split(';');
    returnStr = "";
    for(var i=0; i<intArray.length; i++){
        if(parseInt(intArray[i]%3) == 0){
            if(returnStr != ''){
                returnStr += ';';
                returnStr += intArray[i];
            }
            postMessage(returnStr)
        }
        console.info(returnStr)

    }

}