$().ready(function(){
var firstIn = document.getElementById('yourName') ,
    secondIn = document.getElementById('phone') ,
    gender = document.getElementById('gender'),
    test = document.getElementById('test'),
    spanIn1 =  document.getElementById('spanIn1'),
    spanIn2 =  document.getElementById('spanIn2');
   // spanIn3 =  document.getElementById('spanIn3'),
   // spanIn4 = document.getElementById('spanIn4');

firstIn.onblur = function(){
    'use strict';

    var text = firstIn.value;
    var character = new Array(text.length);
    var i,a , tester = false;
    for (i=0, a = text.length; i < a; i=i+1) {
        character[i] = text[i];
        if (character[i] == "1" || character[i] == "2" || character[i] == "3" ||
            character[i] == "4"|| character[i] == "5" || character[i] == "6" ||
            character[i] == "7" || character[i] == "8" ||
           character[i] == "9" || character[i] == "0"){
           tester = true;
        }
    }
  if (firstIn.value == ''){
        spanIn1.innerHTML = 'يجب ملئ الحقل';
        firstIn.style.border = '1px solid #f00';
        firstIn.value = '';

    }
   else  if (tester){
       spanIn1.innerHTML = 'يجب ألا يحتوي الإسم على أرقام  ';
       firstIn.style.border = '1px solid #f00';
       firstIn.value = '';

   } else if (firstIn.value.length < 5){
        spanIn1.innerHTML = 'يجب ألا يقل الإسم عن 5 حروف';
        firstIn.style.border = '1px solid #f00';
       firstIn.value = '';

    }
    else {
        secondIn.removeAttribute("disabled");
        secondIn.focus();
        firstIn.style.border = '0px solid #f00';
        spanIn1.innerHTML   = '';
    }
}


secondIn.onblur = function(){
    'use strict';
    var phone_number = secondIn.value;
    var character = new Array(phone_number.length);
    var i,a , test = true;
    for (i=0, a = phone_number.length; i < a; i=i+1) {
        character[i] = phone_number[i];
        if (character[i] == "1" || character[i] == "2" || character[i] == "3" ||
            character[i] == "4"|| character[i] == "5" || character[i] == "6" ||
            character[i] == "7" || character[i] == "8" ||
            character[i] == "9" || character[i] == "0") {
            test = false;
        } else {
            test = true;
            break;
        }
    }


    if (secondIn.value == ''){
         spanIn2.innerHTML = 'يجب ملئ الحقل';
        secondIn.style.border = '1px solid #f00';
        secondIn.value = '';


    }
  else if (test){
        spanIn2.innerHTML = 'يجب ألا يحتوى الرقم على حروف  ';
       secondIn.style.border = '1px solid #f00';
      secondIn.value = '';

   }

    else if (secondIn.value.length < 11){
         spanIn2.innerHTML = 'رقم خاطئ';
         secondIn.style.border = '1px solid #f00';
        secondIn.value = '';

    }
    else if(secondIn.value.length > 11){
          spanIn2.innerHTML = 'رقم خاطئ';
         secondIn.style.border = '1px solid #f00';
        secondIn.value = '';

    }
    else {
        gender.removeAttribute("disabled");
       test.style.backgroundColor = '#E1B42B';
        secondIn.style.border = '0px solid #f00';
        spanIn2.innerHTML = '';
    }
}


var yup = document.getElementById("yup"),
    nop = document.getElementById("nop");
yup.onchange = function (){
if (yup.checked){
    $(".yes").show(300);
    $(".nop").hide(300);

} else if (nop.checked){
     $(".yes").hide(300);
     $(".nop").show(300);

}
}

nop.onchange = function (){
if (yup.checked){
    $(".yes").show(300);
    $(".nop").hide(300);

} else if (nop.checked){
     $(".yes").hide(300);
     $(".nop").show(300);
   }
}






var webb = document.getElementById("webb"),
    javaa = document.getElementById("javaa");
webb.onchange = function (){
if (webb.checked){
    $(".testw").show(300);
    $(".testj").hide(300);

} else if (javaa.checked){
     $(".testw").hide(300);
     $(".testj").show(300);

}
}

javaa.onchange = function (){
if (webb.checked){
    $(".testw").show(300);
    $(".testj").hide(300);

} else if (javaa.checked){
     $(".testw").hide(300);
     $(".testj").show(300);

}
}

});
