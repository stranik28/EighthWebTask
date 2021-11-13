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
    }
}

$(function(){
    $(".ajaxForm").submit(function(e){

        e.preventDefault();

        var href = $(this).attr("action");

        $.ajax({

            type: "POST",

            dataType: "json",

            url: href,

            data: $(this).serialize(),

            success: function(response){

                if(response.status == "success"){

                    alert("We received your submission, thank you!");

                }else{

                    alert("An error occured: " + response.message);

                }

            }

        });

    });

});