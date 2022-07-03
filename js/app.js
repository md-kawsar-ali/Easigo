// Happy Coding
// Become a Partner (Send Mail)
function sendMail() {
    const getFname = jQuery('#fname').val();
    const getEmail = jQuery('#email').val();
    const getPhone = jQuery('#phone').val();
    const getSubject = jQuery('#subject').val();

    if (getFname != '' && getEmail != '' && getPhone != '' && getSubject != '') {
        jQuery('#emailSendResult').html('Loading...');
        $.ajax({
            url: 'submitForm.php',
            data: { fname: getFname, email: getEmail, subject: getSubject },
            method: 'POST',
            success: function (data) {
                jQuery('#emailSendResult').html(`<span style="color: #12b82e;">${data}</span>`);
                document.getElementById('subject').value = '';
                document.getElementById('email').value = '';
                document.getElementById('fname').value = '';
            },
            error: function () {
                jQuery('#emailSendResult').html(`<span style="color: #FC4747;">Something went wrong!</span>`);
            }
        });
    } else {
        jQuery('#emailSendResult').html(`<span style="color: #FC4747;">Please, enter required fields!</span>`);
    }
}