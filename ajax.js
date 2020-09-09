

function download_image() {
    var url = "https://instagram.com/" + document.getElementById('username').value + "?__a=1";

    $("#download").html('Loading');

    $.ajax({
        url: url,
        type: 'get',
        success: function (response) {
            var profile = response.graphql.user.profile_pic_url_hd;

            $("#image").attr("src", profile);
            document.getElementById("image").style.display = "block";
            $("#download").html('View');
        },
        error: function (error) {
            alert("User Not Found");
            $("#download").html('View');
            document.getElementById("image").style.display = "none";
        }

    });

}

