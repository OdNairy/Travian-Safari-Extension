function parseInt10( number ){
    var intNumber = 'NaN';
    // console.log( number );
    if( number === null || number === undefined )
        number = '';
    if( number.length >= 1 ){
        intNumber = parseInt( number.replace(/[^a-zA-Z0-9 -]/g,""), 10 );
    }
    return intNumber;
}


function getCookie(c_name,def)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return def;
}

function village_links(){
    console.log("village_links")
// alert("Started village links")
    var swordimageIcon = "data:image/png;base64,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";
var resourceimageIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUBAAAAAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvAEBAQICAgMDAwREREWFhYcHBwiIiIpKSlVVVVNTU1CQkI5OTn/fID/UFDWAJPM7P/v1sbn59atqZAzAABmAACZAADMAAAAMwAzMwBmMwCZMwDMMwD/MwAAZgAzZgBmZgCZZgDMZgD/ZgAAmQAzmQBmmQCZmQDMmQD/mQAAzAAzzABmzACZzADMzAD/zABm/wCZ/wDM/wAAADMzADNmADOZADPMADP/ADMAMzMzMzNmMzOZMzPMMzP/MzMAZjMzZjNmZjOZZjPMZjP/ZjMAmTMzmTNmmTOZmTPMmTP/mTMAzDMzzDNmzDOZzDPMzDP/zDMz/zNm/zOZ/zPM/zP//zMAAGYzAGZmAGaZAGbMAGb/AGYAM2YzM2ZmM2aZM2bMM2b/M2YAZmYzZmZmZmaZZmbMZmYAmWYzmWZmmWaZmWbMmWb/mWYAzGYzzGaZzGbMzGb/zGYA/2Yz/2aZ/2bM/2b/AMzMAP8AmZmZM5mZAJnMAJkAAJkzM5lmAJnMM5n/AJkAZpkzZplmM5mZZpnMZpn/M5kzmZlmmZmZmZnMmZn/mZkAzJkzzJlmzGaZzJnMzJn/zJkA/5kz/5lmzJmZ/5nM/5n//5kAAMwzAJlmAMyZAMzMAMwAM5kzM8xmM8yZM8zMM8z/M8wAZswzZsxmZpmZZszMZsz/ZpkAmcwzmcxmmcyZmczMmcz/mcwAzMwzzMxmzMyZzMzMzMz/zMwA/8wz/8xm/5mZ/8zM/8z//8wzAMxmAP+ZAP8AM8wzM/9mM/+ZM//MM///M/8AZv8zZv9mZsyZZv/MZv//ZswAmf8zmf9mmf+Zmf/Mmf//mf8AzP8zzP9mzP+ZzP/MzP//zP8z//9m/8yZ///M////ZmZm/2b//2ZmZv//Zv9m//+lACFfX193d3eGhoaWlpbLy8uysrLX19fd3d3j4+Pq6urx8fH4+Pj/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//////9JYOcPAAAAAXRSTlMAQObYZgAAASJJREFUeNp1k7FtxDAMRUlkgsxwhUoBGSEjuPBK2cWFRzlAJYsLboOb4OCQEklRliPANm0+fVJfMoIPhAPmgZ7EBfYaHxcALvcnfLcvv8/jCoA7vCT6hK/9EkhU3hJ9rHQFiERZAaic8ydgm/IGMMEAlXzOB4Altgz/AhzccnnMXnXg9gBYZiQAuWQokwqGPDAg14BgmN8UVhqQ4AMDiY2Q5QYETaABYmW1lJFj3CzgZE5ASaVJCTSBRGnLKbSvpqMKJJlqBMmbSqAKVKIBpIWaBHoHKk8wdmFARRxKFdwU8Ar1e+eoEugVKDRoQj8OxAKmwre9A61LpexRtIT20IjglFToPoSVWhlbRdQgV9J82E0YGMv3n7chPvxAhFM9DjtSf2nCwCG7f6Q4AAAAAElFTkSuQmCC";
    if(parseInt10(getCookie("VillageLinks","1"))){
        villas = document.querySelectorAll("div.innerBox.content ul li:not(.active) a[href^='?newdid=']")
        // alert(villas)
        for (var i = 0; i < villas.length; i++) {

            vil = villas[i]
            // var x = parseInt10( $(this).find('span.coordinateX').html().replace('(','') );
            
            var x = parseInt10(vil.querySelector("span span[class='coordinateX']").textContent.substring(1));
            var y = parseInt10(vil.querySelector("span span[class='coordinateY']").textContent.slice(0,-1));
            
            var nyersanyag_link='http://'+document.location.href.split('/')[2]+'/build.php?gid=17&x='+x+'&y='+y + "&t=5";
            var egyseg_link='http://'+document.location.href.split('/')[2]+'/build.php?gid=16&x='+x+'&y='+y + "&tt=2&c=2";
            
            var egyseg_gomb = document.createElement( 'a' );
            var egyseg_kep  = document.createElement( 'img' );
            egyseg_kep.setAttribute( 'src', swordimageIcon );
            egyseg_kep.setAttribute( 'style', 'margin-left: -20px;' );  
            
            egyseg_gomb.setAttribute( 'href', egyseg_link);
            egyseg_gomb.setAttribute('title', 'Send troops');
            egyseg_gomb.setAttribute( 'style', 'width: 5%' );  
            egyseg_gomb.appendChild( egyseg_kep );
            
            vil.querySelector('span[class="coordinates coordinatesWrapper coordinatesAligned coordinatesLTR"]').insertBefore( egyseg_gomb , null);
            
            var nyersanyag_gomb = document.createElement( 'a' );
            var nyersanyag_kep  = document.createElement( 'img' );
            nyersanyag_kep.setAttribute( 'src', resourceimageIcon );
            nyersanyag_kep.setAttribute( 'style', 'margin-left: -4px;' );
            
            
            nyersanyag_gomb.setAttribute( 'href', nyersanyag_link);
            nyersanyag_gomb.setAttribute( 'title', 'Send Resources');
            nyersanyag_gomb.setAttribute( 'style', 'vertical-align:middle; width: 5%');
            nyersanyag_gomb.appendChild( nyersanyag_kep );
            vil.querySelector('span[class="coordinates coordinatesWrapper coordinatesAligned coordinatesLTR"]').insertBefore( nyersanyag_gomb , null);
            
            
            // $("div.name",this).css('margin-left','25px');
        };
    }
}

