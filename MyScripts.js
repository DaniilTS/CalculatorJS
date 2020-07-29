
function number(id) {
    document.getElementById('input_num').value += id;
}

let num1 = null;
function mathFunc(id){
    if (document.getElementById('input_num').value === "") {
        alert('Введите число')
    }
    else {
        if (num1 === null) {
            num1 = document.getElementById('input_num').value;
            document.getElementById('input_num').value = '';
        }
        else {
            let num2 = document.getElementById('input_num').value;
            document.getElementById('input_num').value = '';
        }
    }
}

function placeComa(){
    let num = document.getElementById('input_num').value.toString();
    num += ".1";
    document.getElementById('input_num').value = parseFloat(num);
}

function delLast(){
    document.getElementById('input_num').value =
        document.getElementById('input_num').value.slice(0,-1);
}

function delAll(){
    document.getElementById('input_num').value = '';
}