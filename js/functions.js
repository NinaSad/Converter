function Format()
{
	//{"hello":"world", "Test":["hellfo"]};
    var element = document.getElementById('main_text_box');
	var obj = element.value;
	obj = JSON.parse(obj);
	element.value = JSON.stringify(obj, null, 4);

	//need to deal with eceptions!!!
}

var x2js = new X2JS();

function convertXml2JSon() {
    $("#main_text_box").val(JSON.stringify(x2js.xml_str2json($("#main_text_box").val())));
}

function convertJSon2XML() {
    $("#main_text_box").val(x2js.json2xml_str($.parseJSON($("#main_text_box").val())));
}

$("#main_text_box").val("<root><child><textNode>First &amp; Child</textNode></child><child><textNode>Second Child</textNode></child><testAttrs attr1='attr1Value'/></root>");

convertXml2JSon();
convertJSon2XML();
$("#convertToJsonBtn").click(convertXml2JSon);
$("#convertToXmlBtn").click(convertJSon2XML);