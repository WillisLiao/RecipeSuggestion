// hero_scripts.js
$(document).ready(function() {
    $('.hero .tags .tag').click(function() {
        $(this).toggleClass('selected');
    });

    $('#addTag').click(function() {
        let otherTagInput = $('#otherTagInput').val().trim();
        if (otherTagInput !== '') {
            let newTag = $('<div class="tag selected">' + otherTagInput + '</div>');
            newTag.click(function() {
                $(this).toggleClass('selected');
            });
            $('#otherTagInput').val('');
            $(this).parent().before(newTag);
        }
    });
});
