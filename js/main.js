$(document).ready(function (){
    PopUpHide();
});


function PopUpShow(){
    $("#pop-up").show();
    CheckParams();
}

function PopUpHide(){
    $("#pop-up").hide();
}

function CheckParams(){
    let name = $('#name').val();
    let email = $('#email').val();
    let mess = $('#mess').val();
    if(name.length !== 0 && email.length !== 0 && mess.length !== 0 && $('#check').prop("checked")){
        $('#send').removeAttr('disabled');
    }
    else{
        $('#send').attr('disabled', 'disabled');
        console.log("Not all "+$('#check').prop("checked"));
    }
}

function Send(){

}