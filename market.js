attrInject$ = ['class', 'tbInject'];
var jsVoid = 'javaScript:void(0)';

function test () {
            alert("This is test!")
}

function market_main () {
	console.log("market main")
	var send_resources_tab = document.querySelectorAll("div.contentNavi div.container")[1].classList.contains("active")

	if (send_resources_tab) {
		send_resources_main();
	};

	function send_resources_main () {
		var merchant_max_capacity = parseInt(document.querySelector("div[class='carry'] b").textContent);

		var aQcarry = [100, 500, 1000, merchant_max_capacity]
		resTb = document.getElementById("send_select")

		var aRow, aCell;
		for (var i = 0; i < 4; i++) {
			aRow = resTb.rows[i]
			aRow.cells[3].style.display = 'none'	// hide merchant capacity button like '1500'
			aCell = $td([['class', 'tbInject tbUseThem']]); 
			aCheck = $i([['type', 'checkbox'],['title', T('USERES_TT', T('RES1'))]]);
			aCheck.checked = true

			aCell.appendChild(aCheck)
			aRow.appendChild(aCell)



            var tool = $lnk([
                ['class', 'tbTool'],
                ['href', jsVoid]
            ]);

            var div = $e("div", "<img class=\"del\" src=\"img/x.gif\" title=\"Delete\" alt=\"Delete\">");
            imgNode = div.removeChild(div.firstChild); 
            tool.appendChild(imgNode)
            aRow.appendChild($td(attrInject$, tool))
            // tool.addEventListener("click",onClick,false)

            
			uiAddQCarryCells(aRow, i, aQcarry)
		};


        // var clAllRow = $r(attrInject$, [$td(attrInject$, I("r0")), (aRow.cells.length === 12) ? $td(attrInject$) : null, $td(attrInject$, uiCreateTool("bDel", T('MTCL'), bind(onClearAllTransports, [false]))), $td(attrInject$), $td(attrInject$, uiCreateTool("del", null, bind(onClearAllTransports, [true])))]);
        // uiAddQCarryCells(clAllRow, 4, aQcarry); 
        // alert("done")
        
	}

	function uiAddQCarryCells(aRow, ri, aQcarry) {
		var j, aLink;
		for (j = 0; j < aQcarry.length; j++) {
			aLink = $action(['class', 'tbQCarry' + (aQcarry[j] === self.mCap ? " tbMCap" : "")], '&nbsp;' + aQcarry[j], bind(onQCarry, [ri, aQcarry[j]]));
			aRow.appendChild($td(attrInject$, aLink));
		}
		aLink = $action(['class', 'tbQCarry'], '&nbsp;' + T('ALL'), bind(onQCarry, [ri]));
		// aRow.appendChild($td(attrInject$, aLink));
	} 
}




// TODO: check if market url
// if (document.getElementById("send_select")) {
	
// 	// market_main();
// };



//-------------------------------    		HELPERS 	FUNCTIONS -----------------------



// TODO: translation function
function T (name) {
	return name;
}


function onQCarry(ri, q) {
            var rxVal = self.getCurrentTransports();
            var resAvail = self.getResourcesState().Res;
            if (ri < 4) {
                self.setNewTransport(ri, q, resAvail, rxVal);
            } else {
                for (ri = 0; ri < 4; ++ri) {
                    if (self.aUTR[ri]) {
                        self.setNewTransport(ri, q, resAvail, rxVal);
                    }
                }
            }
        }


function addChildren(node, children) {
        if (children) {
            if (__isLikeToArray(children)) {
                var i;
                for (i = 0; i < children.length; i++) {
                    addChildren(node, children[i]);
                }
            } else {
                node.appendChild(__getDOMNode(children));
            }
        }
}

function isDOMNode(node) {
        return typeof (node) === "object" && typeof (node.nodeType) === "number" && typeof (node.nodeName) === "string" && typeof (node.tagName) === "string";
    };

    function __getDOMNode(node) {
        if (typeof node === "string" || typeof node === "number") {
            node = document.createTextNode(node);
        }
        return node;
    }

    function __isLikeToArray(o) {
        return (o instanceof Array || (typeof o === "object" && 'length' in o && !isDOMNode(o)));
    }


function bind(f, boundArgs) {
        return function () {
            return f.apply(this, boundArgs);
        };
}

function $e(aType, attributes, content) {
        var node = document.createElement(aType);
        if (!(attributes instanceof Array) && !(attributes === null || attributes === undefined)) {
            content = attributes;
            attributes = null;
        }
        $at(node, attributes);
        if (content !== null && content !== undefined) {
            if (typeof content === "object") {
                addChildren(node, content);
            } else if (content !== "") {
                node.innerHTML = content;
            }
        }
        return node;
}


function $txt(data) {
    return document.createTextNode(data);
}

function $t(att, content) {
    return $e("table", att, content);
}

function $th(att, content) {
    return $e("th", att, content);
}

function $r(att, content) {
    return $e("tr", att, content);
}

function $c(iHTML, att) {
    return $e("td", att, iHTML);
}

function $td(att, content) {
    return $e("td", att, content);
}

function $img(att) {
    var aImg = document.createElement("img");
    $at(aImg, att);
    return aImg;
}

function $a(iHTML, att) {
    return $e("a", att, iHTML);
}

function $lnk(att, content) {
    return $e("a", att, content);
}

function $action(att, content, onClick) {
    var aLink = $lnk(att, content);
    aLink.href = 'javaScript:void(0)';
    aLink.addEventListener("click", onClick, false);
    return aLink;
}

function $i(att) {
    var aInput = document.createElement("input");
    $at(aInput, att);
    return aInput;
}

function $div(att, content) {
    return $e("div", att, content);
}

function $span(att, content) {
    return $e("span", att, content);
}

function $at(aElem, attributes) {
    function processAttribute(aElem, name, value) {
        if (value !== null && value !== undefined && value !== "") {
            if (name === 'class' && value.charAt(0) === '+') {
                addClass(aElem, value.slice(1));
            } else {
                if (name.toUpperCase() === 'TITLE') {
                    try {
                        aElem.wrappedJSObject.setTip(value);
                    } catch (e) {
                        aElem.setAttribute(name, value);
                        aElem.setAttribute('alt', value);
                    }
                } else if (name.charAt(0) === '#') {
                    setTBAttribute(aElem, name.slice(1), value);
                } else {
                    aElem.setAttribute(name, value);
                }
            }
        } else {
            aElem.removeAttribute(name);
        }
    }

    function processEventListener(aElem, type, listener, useCapture) {
        aElem.addEventListener(type, listener, useCapture);
    }

    if (attributes) {
        var xi;
        for (xi = 0; xi < attributes.length; xi++) {
            var attribute = attributes[xi];
            if (attribute instanceof Array) {
                if (attribute.length === 2) {
                    processAttribute(aElem, attribute[0], attribute[1]);
                } else if (attribute.length === 3) {
                    processEventListener(aElem, attribute[0], attribute[1], attribute[2]);
                }
            } else if (xi === 0) {
                if (attributes.length === 2) {
                    processAttribute(aElem, attribute, attributes[1]);
                } else if (attribute.length === 3) {
                    processEventListener(aElem, attribute, attributes[1], attributes[2]);
                }
                break;
            }
        }
    }
}

// gIc["del"] = '<img class="del" src="' + xGIF + '" title="' + T('DEL') + '" alt="' + T('DEL') + '">';

function uiCreateTool(imgTag, tooltip, onClick) {
        var tool = $lnk([
            ['class', 'tbTool'],
            ['href', jsVoid]
        ]);
        var attr = null;
        if (tooltip) {
            attr = [
                ['title', tooltip]
            ];
        }
        tool.appendChild(I(imgTag, attr));
        if (onClick) {
            tool.addEventListener("click", onClick, false);
        }
        return tool;
    }

    function I(name, attr) {
        var pre_att;
        var imgNode = null;
        if (I.images_attributes) {
            pre_att = I.images_attributes[name];
        }
        if (!pre_att) {
            var imgHTML = gIc[name];
            if (imgHTML) {
                var div = $e("div", imgHTML);
                imgNode = div.removeChild(div.firstChild);
                $at(imgNode, attr);
            } else {
                var src = image[name];
                if (src) {
                    pre_att = [
                        ['src', src]
                    ];
                } else {
                    pre_att = [
                        ['class', name],
                        ['src', xGIF]
                    ];
                }
            }
        }
        return imgNode ? imgNode : $img(pre_att.concat(attr));
    }