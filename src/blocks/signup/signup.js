$('#owner').hide();
$('#done').hide();

$('.button-next').click(function() {
    $('#business-tab').parent().removeClass('active');
    $('#owner-tab').parent().addClass('active');
    $('#business').hide();
    $('#owner').show();
    return false;
});

$('.button-back').click(function() {
    $('#owner-tab').parent().removeClass('active');
    $('#business-tab').parent().addClass('active');
    $('#owner').hide();
    $('#business').show();
    return false;
});

$('form').submit(function() {
    var form = $('form').serializeArray();

    // todo send
    console.log('Sending form', form);

    $('#owner-tab').parent().removeClass('active');
    $('#done-tab').parent().addClass('active');
    $('#owner').hide();
    $('#done').show();
    //return false;
});

function processDbaBlock() {
    if ($('input[name=DBA]').is(':checked')) {
        $('.dba-block').hide();
    }
    else {
        $('.dba-block').show();
    }
}

processDbaBlock();
$('input[name=DBA]').change(processDbaBlock);
