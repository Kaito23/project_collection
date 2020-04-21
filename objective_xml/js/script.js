/** Test area*/

function list() {
	console.log("element tree size: " + objecttree.length);
}


/* test area end */


/** Back to main screen */
function reset() {
    $('.box').animate({
        left: '250px',
        opacity: '0',
        height: '10px'
    }, function() {
        $('#jumbo').show();
        $('#content').html("");
        $('#resetbutton').addClass('disabled');
    });
}

function handleFileSelect() {
    $('#resetbutton').removeClass('disabled');

    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        alert('The File APIs are not fully supported in this browser.');
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    } else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    } else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
        //fr.readAsDataURL(file);
    }

    $('#jumbo').hide();
}

function receivedText() {
    var xmlDoc = fr.result;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xmlDoc, "text/xml");
	
	objecttree.push(xmlDoc);
    iterator(xmlDoc.childNodes);
}

var objecttree = [];

function iterator(elem) {
    for (var j = 0; j < elem.length; j++) {
        if (elem[j].localName != null) {
			var testString = elem[j].localName + " -> " +j;
			var elementJ = elem[j];
            var domObject = $("<div class='box'><h2>" + elem[j].localName + "</h2></div>");
			
			if(elem[j].attributes.length > 0) {
				var boxTable = $("<table>");
				for (var x = 0; x < elem[j].attributes.length; x++) {
					boxTable.append("<tr><td>"+elem[j].attributes[x].name +"</td><td>" +"<input type='text' name='firstname' value='"+elem[j].attributes[x].value+"'></input></td></tr>");
				}
				domObject.append(boxTable);
			}
			
			if(elem[j].childNodes.length<=1) {
				console.log("found empty with inner html= " + elem[j].innerHTML)
				var tmp = $("<table>");
				tmp.append("<tr><td>Value</td><td>" +"<input type='text' name='firstname' value='"+elem[j].innerHTML+"'></input></td></tr>");
				domObject.append(tmp);
			} else {
				var buttonChildren = $('<button type="button" class="btn btn-default">Children</button> <br />');
				buttonChildren.click(childrenButtonClickEvent(elem[j]));
				domObject.append(buttonChildren);
			}
			$('#content').append(domObject);
        }
    }
}

function childrenButtonClickEvent(elem){
  return function(){
	$('#content').empty();
    $('#backButton').show();
	iterator(elem.childNodes);
	objecttree.push(elem);	
  }
}

function backButtonFunction(){
	$('#content').empty();
	var elem = objecttree[objecttree.length-1];
	
	iterator(elem.childNodes);
	if(objecttree.length == 1) {
		$('#backButton').hide();
	}
	if(objecttree.length > 1) {
		objecttree.pop();
	}
  
}
