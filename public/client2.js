// Navbar Component Function
$(function(){
    $("#navbar").load("partials/navbar.html"); 
    });

//Autocomplete Datalist
var selected;
var xmlhttp = new XMLHttpRequest();
var url = 'https://test-proj-dev0020.c9users.io/api/data/';
xmlhttp.open('POST', url, true);
xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
xmlhttp.setRequestHeader('Content-type', 'application/ecmascript');
xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');

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
    // $.get( "https://test-proj-dev0020.c9users.io/api/data/", function( data ) {
    //     $( ".result" ).html( data );
    //     alert( "Load was performed." );
    // });
        // $.ajax({

        //         url: 'https://test-proj-dev0020.c9users.io/api/data/',
        //         type: 'GET',
        //         crossDomain: true,
        //         success: function() { alert("Success"); },
        //         error: function() { alert('Failed!'); }
        //     });
// Populate Input Fields
$(document).ready(function() {
    $('#name-lists').on('change', function() {
        var userText = $(this).val();
        $("#data-list").find("option").each(function() {
            if ($(this).val() == userText) {
                selected = $(this).val();
                $('#client').val($(this).val());
            }
            var xmlhttp = new XMLHttpRequest();
            var url = 'https://test-proj-dev0020.c9users.io/api/data/';
            xmlhttp.open('POST', url, true);
            xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
            xmlhttp.setRequestHeader('Content-type', 'application/ecmascript');
            xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    for(x in myObj){
                        if (selected == myObj[x].client ){
                            CKEDITOR.disableAutoInline = true;
                            $('#client, #client2').html(jQuery.parseHTML(myObj[x].client));
                            $('#job_owner, #job_owner2').html(jQuery.parseHTML(myObj[x].job_owner));
                            $('#trackingnumber, #trackingnumber2').html(jQuery.parseHTML(myObj[x].tracking_number));
                            $('#need_acceptance, #need_acceptance2').html(jQuery.parseHTML(myObj[x].need_acceptance));
                            $('#accept_phone, #accept_phone2').html(jQuery.parseHTML(myObj[x].ok_to_accept_srs_over_the_phone));
                            $('#trades, #trades2').html(jQuery.parseHTML(myObj[x].trades));
                            $('#nte, #nte2').html(jQuery.parseHTML(myObj[x].nte));
                            $('#ok_to_sub, #ok_to_sub2').html(jQuery.parseHTML(myObj[x].ok_to_sub));
                            $('#cam, #cam2').html(jQuery.parseHTML(myObj[x].cam));
                            $('#cc, #cc2').html(jQuery.parseHTML(myObj[x].cc));
                            $('#website, #website2').html(jQuery.parseHTML(myObj[x].website));
                            $('#instructions, #instructions2').html(jQuery.parseHTML(myObj[x].special_instructions));

                            $("#client2,#client2 + div").html($('#client2').html());
                            $("#job_owner2,#job_owner2 + div").html($('#job_owner2').html());
                            $("#trackingnumber2,#trackingnumber2 + div").html($('#trackingnumber2').html());
                            $("#need_acceptance2,#need_acceptance2 + div").html($('#need_acceptance2').html());
                            $("#accept_phone2,#accept_phone2 + div").html($('#accept_phone2').html());
                            $("#trades2,#trades2 + div").html($('#trades2').html());
                            $("#nte2,#nte2 + div").html($('#nte2').html());
                            $("#ok_to_sub2,#ok_to_sub2 + div").html($('#ok_to_sub2').html());
                            $("#cam2,#cam2 + div").html($('#cam2').html());
                            $("#cc2,#cc2 + div").html($('#cc2').html());
                            $("#website2,#website2 + div").html($('#website2').html());
                            $("#instructions2,#instructions2 + div").html($('#instructions2').html());

                            $("#client, #job_owner, #trackingnumber, #need_acceptance, #accept_phone, #trades, #nte, #ok_to_sub, #cam, #cc, #website, #instructions").css("display","block");
                            $("#client2, #job_owner2, #trackingnumber2, #need_acceptance2, #accept_phone2, #trades2, #nte2, #ok_to_sub2, #cam2, #cc2, #website2, #instructions2, #client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","none"); 

                            $('.search-input').val("");
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
                        }
                    }
                }
            };
            xmlhttp.open("GET", "LVI_CLIENTS.json", true);
            xmlhttp.send();
                // $.ajax({
                //     url: 'https://test-proj-dev0020.c9users.io/api/data/',
                //     type: 'GET',
                //     crossDomain: true,
                //     success: function() { alert("Success"); },
                //     error: function() { alert('Failed!'); }
                // });
        })
    })
});

// Updating & Creating Client Function
$(document).ready(function(){
    $("#client2, #job_owner2, #trackingnumber2, #need_acceptance2, #accept_phone2, #trades2, #nte2, #ok_to_sub2, #cam2, #cc2, #website2, #instructions2, #client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","none"); 
    $("#update-btn").attr('disabled', true).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'});
    $("#submit-btn").css("display","none");
    $('.disabled').prop("disabled", true);

    $('.search-input').on('keyup', function () {
        $("#submit-btn").css("display","none");
        $("#update-btn").attr('disabled', false).css({'background-color' : '#25a69a', 'cursor' : 'pointer'});
        $("#client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","none"); 
    });
    
    $('#update-btn').click(function(){
        $("#client, #job_owner, #trackingnumber, #need_acceptance, #accept_phone, #trades, #nte, #ok_to_sub, #cam, #cc, #website, #instructions").css("display","none");
        $("#client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","block");
        $(this).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'}); 
        $("#submit-btn").css("display","block");
    });	

    $('#add-btn').click(function(){
        $("#submit-btn").css("display","block");
        $("#update-btn").attr('disabled', true).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'});
        CKEDITOR.disableAutoInline = true;
        $("#client, #job_owner, #trackingnumber, #need_acceptance, #accept_phone, #trades, #nte, #ok_to_sub, #cam, #cc, #website, #instructions").css("display","none");
        $("#client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","block");
        $("#client2, #job_owner2, #trackingnumber2, #need_acceptance2, #accept_phone2, #trades2, #nte2, #ok_to_sub2, #cam2, #cc2, #website2, #instructions2, #client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").html("");
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
    });
});


