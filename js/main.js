/**
 * Created by jinlei on 2016/11/28.
 */

import { value_change } from './index'

let el = document.getElementById('range1')
el.addEventListener('change', function () {
    value_change()
},false)

import { showFileName, Blob_test } from './file'

let btn = document.getElementById('btn')


btn.addEventListener('click',function(){
    showFileName('file')
},false)



let btndownload = document.getElementById('btndownload')
btndownload.addEventListener('click', function (e) {
    Blob_test('text','result')
},false)


import { readAsDataURL, readAsBinaryString, readAsText } from './fileReader'


let btn1 = document.getElementById('read_btn_image')
btn1.addEventListener('click',function(){
    readAsDataURL('files','res')
},false)

let btn2 = document.getElementById('read_btn_binary')
btn2.addEventListener('click',function(){
    readAsBinaryString('files','res')
},false)

let btn3 = document.getElementById('read_btn_text')
btn3.addEventListener('click',function(){
    readAsText('files','res')
},false)


import {btoa, atob} from './base64'

let name = 'jinlei'
name = btoa(name)
console.info(name)
name = atob(name)
console.info(name)

import {draw, imgSave} from './canvasFile'

let _body = document.getElementsByTagName('body')[0]

_body.addEventListener('load', function () {
    draw('canvas')
},false)

let img_btn = document.getElementById('img_save')
img_btn.addEventListener('click', function (e) {
    imgSave('canvas')
},false)
// crypto 加密示例

var CryptoJS = require('crypto-js')
let transCode = {
	key : '0123456789abcdef',
	iv : '0123456789abcdef',
	encode : function(str) {
		transCode.key = CryptoJS.enc.Utf8.parse(transCode.key)
		transCode.iv = CryptoJS.enc.Utf8.parse(transCode.iv)
		let encrypted = CryptoJS.AES.encrypt(str, transCode.key, {
			    iv: transCode.iv,
			    mode: CryptoJS.mode.CBC,
			    padding: CryptoJS.pad.Pkcs7
		})
		encrypted = encrypted.toString()
		return encrypted
	},
	decode : function(str) {
		let decrypted = CryptoJS.AES.decrypt(str, transCode.key, {
			    iv: transCode.iv,
			    mode: CryptoJS.mode.CBC,
			    padding: CryptoJS.pad.Pkcs7
		})
		decrypted = CryptoJS.enc.Utf8.stringify(decrypted)
		return decrypted
	},
	
}

let _test = '哈哈哈哈'
_test = transCode.encode('哈哈哈哈哈哈哈哈#类')
console.info(_test)
_test = transCode.decode(_test)
console.info(_test)

// number to String 

import { toString } from './number'

let _num = toString(1000)
console.info(typeof _num)

function utf-8 (str) {
	console.info(str)
}





