/*
 * Format the "disambiguation" data (if any) for display in autocomplete lists.
 *
 */
function formatter(inst) {      
    inst._renderItem = function( div, item ) {
    var ol = '<ol>';
    var disambiguation = '';
    var tmp = '';

    // Do we have a "disambiguation" array....?
    if ($(item.disambiguation).length > 0) {
        // ....if so, does the array have more than one element?
        if (item.disambiguation.length > 1) {
            var arrayLength = item.disambiguation.length;
            for (var i = 0; i < arrayLength; i++) {
                tmp += '<li>' + item.disambiguation[i] + '</li>' ;

            }

        disambiguation = ol + tmp + '</ol>';
        }
        else if (item.disambiguation.length === 1) {
            disambiguation = ol + '<li>' + item.disambiguation + '</li></ol>';
        }

    } // if ($(item.disambiguation).length > 0) {

    return $( "<dl>" )
    .append( "<dt>" + item.label + '<span class="autocomplete-value"> (Id: ' + item.value + ")</span></dt>"
    + disambiguation )
    .appendTo( div );
    };
};
