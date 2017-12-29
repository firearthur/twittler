$(document).ready(function() {
    // var refresher = setInterval(update_content, 3000);
})

function update_content(){

    $.ajax({
      type: "GET",
      url: "index.html",
      cache: false,
    })
      .done(function( page_html ) {
        console.log("LOADED");
    var newDoc = document.open("text/html", "replace");
    newDoc.write(page_html);
    newDoc.close();

    });

}
