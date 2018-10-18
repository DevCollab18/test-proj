// Navbar Component Function
$(function(){
    $("#navbar").load("partials/navbar.html"); 
    });

    //Autocomplete Datalist
var selected;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for(x in myObj){
            // Create a new <option> element.
            var dataList = document.getElementById('data-list');
            var input = document.getElementById('autocomplete-input');
            var option = document.createElement('option');
            // Set the value using the item in the JSON array.
            option.value = myObj[x].client;
            // Add the <option> element to the <datalist>.
            dataList.appendChild(option);
        }
    }
};
xmlhttp.open("GET", "LVI_CLIENTS.json", true);
xmlhttp.send();

// Populate Input Fields
$(document).ready(function() {
    $('#name-lists').on('change', function() {
        var userText = $(this).val();
        $("#data-list").find("option").each(function() {
            if ($(this).val() == userText) {
                selected = $(this).val();
                //1
                $('#client').val($(this).val());
            }
            //2
            //3
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    for(x in myObj){
                        // Create a new <option> element.
                        if (selected == myObj[x].client ){
                            //4
                            $('#client').html(jQuery.parseHTML(myObj[x].client));
                            $('#job_owner').html(jQuery.parseHTML(myObj[x].job_owner));
                            $('#trackingnumber').html(jQuery.parseHTML(myObj[x].tracking_number));
                            $('#need_acceptance').html(jQuery.parseHTML(myObj[x].need_acceptance));
                            $('#accept_phone').html(jQuery.parseHTML(myObj[x].ok_to_accept_srs_over_the_phone));
                            $('#trades').html(jQuery.parseHTML(myObj[x].trades));
                            $('#nte').html(jQuery.parseHTML(myObj[x].nte));
                            $('#ok_to_sub').html(jQuery.parseHTML(myObj[x].ok_to_sub));
                            $('#cam').html(jQuery.parseHTML(myObj[x].cam));
                            $('#cc').html(jQuery.parseHTML(myObj[x].cc));
                            $('#website').html(jQuery.parseHTML(myObj[x].website));
                            $('#instructions').html(jQuery.parseHTML(myObj[x].special_instructions));
                            
                        }
                        
                    }
                }
            };
            xmlhttp.open("GET", "LVI_CLIENTS.json", true);
            xmlhttp.send();
        })
    })
});

// Adding & Creating Client Function
$(document).ready(function(){ 
    // $("#update-btn").attr('disabled', true);
    // $(".disabled").attr('disabled', true);
    // $('input[type="text"],textarea').on('keyup', function () {
    //     var textarea_value = $("#instructions").val();
    //     var text_value = $('disabled').val();
    //     if (textarea_value != '' && text_value != '') {
    //         $('#update-btn').attr('disabled', false);
    //     } else {
    //         $('#update-btn').attr('disabled', true);
    //     }
    // });
    // if( $('#client-modal').is(':visible'))
    //         {
    //             $("#test1").html("hello");
    //         } else {
    //             $("#test1").html("hello");
    //         }
    
    $('#update-btn').click(function(){
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline('client');
        $("#instructions2").html($('#instructions').html());
        CKEDITOR.inline('instructions2');
        
    });
    
    $('#add-btn').click(function(){
        // $('.disabled').prop("disabled", false);
        $('#cke_14_contents').focus();
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline('client2');
		CKEDITOR.inline('jobowner2');
		CKEDITOR.inline('trackingnumber2');
		CKEDITOR.inline('acceptance2');
		CKEDITOR.inline('accept-sr2');
		CKEDITOR.inline('trades2');
		CKEDITOR.inline('nte2');
		CKEDITOR.inline('sub2');
		CKEDITOR.inline('cam2');
		CKEDITOR.inline('cc2');
		CKEDITOR.inline('website2');
		CKEDITOR.inline('instructions2');
        // CKEDITOR.replace('test1');
        // $('.search-input').prop("disabled", true).val("");
        // $(this).addClass('hide');
        // $('#update-btn, #label').addClass('hide');
        // $('#create-btn, #delete-btn').removeClass('hide');
    });

    // $('#delete-btn').click(function(){
    //     $('.disabled').prop("disabled", true).val(" ");
    //     $('.search-input').prop("disabled", false);
    //     $(this).addClass('hide');
    //     $('#trackingnumber').attr('placeholder', this.val);
    //     $('#create-btn').addClass('hide');
    //     $('#update-btn, #add-btn, #label').removeClass('hide');
    //     $('#update-btn').attr("disabled", true);
    // });		
});

// CREATE CLIENT - MODAL

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });

