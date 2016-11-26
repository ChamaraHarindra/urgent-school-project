//Common JS file

//Date time picker for events
$(function () {
    $('#event-date').datetimepicker({
        format: 'L',
    });
});

$(function () {
    $('#event-time').datetimepicker({
        format: 'LT',
    });
});


//Summernote HTML Editor
$('#summernote').summernote({
  placeholder: 'Type your message here',
  minHeight: 150,             // set minimum height of editor
  maxHeight: null,             // set maximum height of editor
  focus: true                  // set focus to editable area after initializing summernote
});
