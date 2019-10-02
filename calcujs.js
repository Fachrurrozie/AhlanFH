function maxi(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var max =Math.max(val1,val2,val3);
	return max; 
}

function mini(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var mini =Math.min(val1,val2,val3);
	return mini; 
}

function meann(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var mean =(parseInt(val1)+parseInt(val2)+parseInt(val3))/3;
	return mean; 
}

function mediann(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var jum  = new Array(val1,val2,val3).sort();
	return jum[1]; 
}
function bersihkan() {
	var val1 = document.formnya.nilai1.value = "";
	var val2 =document.formnya.nilai2.value = "";
	var val3 =document.formnya.nilai3.value = "";
	var hasil= document.getElementById("result");
    hasil.innerHTML = "";
}
function modus() {
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
    let data = new Array(val1,val2,val3);
    let hitung = 0, maks = 0, modus = 0;
    for (let a = 0; a < data.length; a++) {
        hitung = 0;
        for (let b = 0; b < data.length; b++) {
            if(data[a] == data[b]) {
                hitung++;
            }
        }
        if(hitung > maks) {
            maks = hitung;
            modus = data[a];
        }
    }
    if(maks > 1) {
        return modus;
    }
    else {
        return "Nothing";
    }
    }
function hasil() {
	var hasil = document.getElementById("result");
    hasil.innerHTML = "<table>\
    <tr>\
    <td>\
    Max \
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ maxi() +"\
    </td>\
    </tr>\
    <td>\
    Min \
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ mini() +"\
    </td>\
    </tr>\
    <td>\
    Mean \
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ meann() +"\
    </td>\
    </tr>\
    <td>\
    Median \
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ mediann() +"\
    </td>\
    </tr>\
     <td>\
    Modus \
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ modus() +"\
    </td>\
    </tr>\
    </table>"
}
