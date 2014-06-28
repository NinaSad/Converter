//Format Json button
function Format()
{
	//{"hello":"world", "Test":["hellfo"]};
    var element = document.getElementById('main_text_box');
	var obj = element.value;
	obj = JSON.parse(obj);
	element.value = JSON.stringify(obj, null, 4);

	//need to deal with eceptions!!!
}
//convert Json to XML & XML to Json buttons
var x2js = new X2JS();

function convertXml2JSon() {
    $("#main_text_box").val(JSON.stringify(x2js.xml_str2json($("#main_text_box").val())));
}

function convertJSon2XML() {
    $("#main_text_box").val(x2js.json2xml_str(JSON.parse($("#main_text_box").val())));
}


$("#convertToJsonBtn").click(convertXml2JSon);
$("#convertToXmlBtn").click(convertJSon2XML);

//decode/encode buttons
// function array2json(arr) {
//     var parts = [];
//     var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

//     for(var key in arr) {
//     	var value = arr[key];
//         if(typeof value == "object") { //Custom handling for arrays
//             if(is_list) parts.push(array2json(value)); /* :RECURSION: */
//             else parts.push('"' + key + '":' + array2json(value)); /* :RECURSION: */
//             //else parts[key] = array2json(value); /* :RECURSION: */
            
//         } else {
//             var str = "";
//             if(!is_list) str = '"' + key + '":';

//             //Custom handling for multiple data types
//             if(typeof value == "number") str += value; //Numbers
//             else if(value === false) str += 'false'; //The booleans
//             else if(value === true) str += 'true';
//             else str += '"' + value + '"'; //All other things
//             // :TODO: Is there any more datatype we should be in the lookout for? (Functions?)

//             parts.push(str);
//         }
//     }
//     var json = parts.join(",");
    
//     if(is_list) return '[' + json + ']';//Return numerical JSON
//     return '{' + json + '}';//Return associative JSON
// }

function url2json(url) {
   var obj={};

   function arr_vals(arr){
      if (arr.indexOf(',') > 1){
         var vals = arr.slice(1, -1).split(',');
         var arr = [];
         for (var i = 0; i < vals.length; i++)
            arr[i]=vals[i];
         return arr;
      }
      else
         return arr.slice(1, -1);
   }

   function eval_var(avar){
      if (avar[1].indexOf('[') == 0)
         obj[avar[0]] = arr_vals(avar[1]);
      else
         obj[avar[0]] = avar[1];
   }

   if (url.indexOf('?') > -1){
      var params = url.split('?')[1];
      if(params.indexOf('&') > 2){
         var vars = params.split('&');
         for (var i in vars)
            eval_var(vars[i].split('='));
      }
      else
         eval_var(params.split('='));
   }

   return obj;
}
function decode(){
	var decoded = $("#main_text_box").val().replace(/\+/g, " ");
	$("#main_text_box").val(decodeURIComponent(decoded));
}
function encode(){
	var encoded = encodeURIComponent($("#main_text_box").val());
	$("#main_text_box").val(encoded.replace(/'/g,"%27").replace(/"/g,"%22"));
}
$("#decode").click(decode);
$("#encode").click(encode);