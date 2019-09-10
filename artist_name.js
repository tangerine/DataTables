/**
 * artist_name.js
 *
 * Client-side component providing auto-complete lookup for Artists.
 */
$(function() {
    $("#artist-last-name-begins-lookup").autocomplete({               
        source: "/Base/Artists/auto?lookup=null",                 
        minLength: 2,   
        scroll:true,                                           
        select: function(event, ui) {
            event.preventDefault();
     
            $("#artist-id").val(ui.item.value);
            $("#artist-last-name-begins-lookup").val(ui.item.label);  
        }
    })  

    var inst = $( "#artist-last-name-begins-lookup" ).autocomplete( "instance" );
    formatter(inst) ;
});