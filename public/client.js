// Navbar Component Function
$(function(){
    $("#navbar").load("partials/navbar.html"); 
    });
const clientBox = document.querySelector('#client, #client2');
//Autocomplete Datalist
var populate = function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            for(x in myObj){
                var dataList = document.getElementById('data-list');
                var input = document.getElementById('autocomplete-input');
                var option = document.createElement('option');
                option.dataset.id = myObj[x]._id;
                option.value = myObj[x].client;
                dataList.appendChild(option);
            }
        }
    };

    xmlhttp.open("GET", "https://test-proj-dev0020.c9users.io/api/data/");
    xmlhttp.send();
}
// Populate Input Fields
var selectedID;
$(document).ready(function() {
    $('#name-lists').on('change', function() {
        var userText = $(this).val();
        var xmlhttp = new XMLHttpRequest();
        $("#data-list").find("option").each(function() {
            if ($(this).val() == userText) {
                selectedID = $(this).data("id");
            }
            // var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    
                    $('#client, #client2 + div').attr("data-id",myObj._id);
                    $('#client, #client2').html(jQuery.parseHTML(myObj.client));
                    $('#job_owner, #job_owner2').html(jQuery.parseHTML(myObj.job_owner));
                    $('#trackingnumber, #trackingnumber2').html(jQuery.parseHTML(myObj.tracking_number));
                    $('#need_acceptance, #need_acceptance2').html(jQuery.parseHTML(myObj.need_acceptance));
                    $('#accept_phone, #accept_phone2').html(jQuery.parseHTML(myObj.ok_to_accept_srs_over_the_phone));
                    $('#trades, #trades2').html(jQuery.parseHTML(myObj.trades));
                    $('#nte, #nte2').html(jQuery.parseHTML(myObj.nte));
                    $('#ok_to_sub, #ok_to_sub2').html(jQuery.parseHTML(myObj.ok_to_sub));
                    $('#cam, #cam2').html(jQuery.parseHTML(myObj.cam));
                    $('#cc, #cc2').html(jQuery.parseHTML(myObj.cc));
                    $('#website, #website2').html(jQuery.parseHTML(myObj.website));
                    $('#instructions, #instructions2').html(jQuery.parseHTML(myObj.special_instructions));

                    

                    $("#client, #job_owner, #trackingnumber, #need_acceptance, #accept_phone, #trades, #nte, #ok_to_sub, #cam, #cc, #website, #instructions").css("display","block");
                    $("#client2, #job_owner2, #trackingnumber2, #need_acceptance2, #accept_phone2, #trades2, #nte2, #ok_to_sub2, #cam2, #cc2, #website2, #instructions2, #client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","none"); 

                    $('.search-input').val("");
                    
                }
                
            };
            xmlhttp.open("GET", 'https://test-proj-dev0020.c9users.io/api/data/' + selectedID);
            xmlhttp.send();
        })
    })
});

// Updating & Creating Client Function
$(document).ready(function(){
    populate();
    $("#client2, #job_owner2, #trackingnumber2, #need_acceptance2, #accept_phone2, #trades2, #nte2, #ok_to_sub2, #cam2, #cc2, #website2, #instructions2, #client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","none"); 
    $("#update-btn").attr('disabled', true).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'});
    $("#delete-btn").attr('disabled', true).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'});
    $("#submit-btn").css("display","none");
    $('.disabled').prop("disabled", true);

    $('.search-input').on('keyup', function () {
        $("#submit-btn").css("display","none");
        $("#update-btn").attr('disabled', false).css({'background-color' : '#25a69a', 'cursor' : 'pointer'});
        $("#delete-btn").attr('disabled', false).css({'background-color' : 'red', 'cursor' : 'pointer'});
        $("#client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","none"); 
    });
    
    $('#update-btn').click(function(){
        CKEDITOR.disableAutoInline = true;
        $("#client, #job_owner, #trackingnumber, #need_acceptance, #accept_phone, #trades, #nte, #ok_to_sub, #cam, #cc, #website, #instructions").css("display","none");
        $("#client2 + div, #job_owner2 + div, #trackingnumber2 + div, #need_acceptance2 + div, #accept_phone2 + div, #trades2 + div, #nte2 + div, #ok_to_sub2 + div, #cam2 + div, #cc2 + div, #website2 + div, #instructions2 + div").css("display","block");
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
        $("#submit-btn").css("display","block");
    });	

    $('#add-btn').click(function(){
        $("#submit-btn").css("display","block");
        $("#update-btn").attr('disabled', true).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'});
        $("#delete-btn").attr('disabled', true).css({'background-color' : '#dfdfdf', 'cursor' : 'context-menu'});
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
    let request = function (req, seedData, id) {
        let xmlhttp = new XMLHttpRequest();
        let url = {
                POST:   'https://test-proj-dev0020.c9users.io/api/data',
                PUT:    'https://test-proj-dev0020.c9users.io/api/data/' + id + '?_method=PUT',
                DELETE: 'https://test-proj-dev0020.c9users.io/api/data/' + id + '?_method=DELETE'
            }
            xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            populate();
            }
        }
        xmlhttp.open('POST', url[req.toUpperCase()])
        xmlhttp.setRequestHeader('content-type', 'application/json')
        xmlhttp.send(seedData)
        }
    $('#submit-btn').click(function(event){
        event.preventDefault();
        var infoData = {
            client:                             $('#client2 + div').html(),
            job_owner:                          $('#job_owner2 + div').html(),
            tracking_number:                    $('#trackingnumber2 + div').html(),
            need_acceptance:                    $('#need_acceptance2 + div').html(),
            ok_to_accept_srs_over_the_phone:    $('#accept_phone2 + div').html(),
            trades:                             $('#trades2 + div').html(),
            nte:                                $('#nte2 + div').html(),
            ok_to_sub:                          $('#ok_to_sub2 + div').html(),
            cam:                                $('#cam2 + div').html(),
            cc:                                 $('#cc2 + div').html(),
            website:                            $('#website2 + div').html(),
            special_instructions:               $('#instructions2 + div').html()
        }
        var data = JSON.stringify(infoData);
        // ===================================
        //  POST REQUEST TO UPDATE ROUTE
        // ===================================
        if($('#client').attr('data-id')){
            console.log("hahaha");
            request('PUT', data, $('#client').attr('data-id'));
        } else {
            console.log(data);
            request('POST', data);
            
        }
        setTimeout(function() {
            location.reload();
            alert("Edit Complete");
        }, 1000);
    });

    $('#delete-btn').click(function(){
        request('DELETE','',$('#client').attr('data-id'));
        setTimeout(function() {
            location.reload();
            alert("Client Deleted");
        }, 1000);
        
    });
    
});


