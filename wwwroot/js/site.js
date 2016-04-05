// ----------------------------UTIL------------------------------
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function post(url, data, success, error) {
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');


        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                success(data);
            } else {
                // We reached our target server, but it returned an error
                error();
            }
        };

        request.onerror = function() {
            error();
        };

        request.send(data);
}
// --------------------------------------------------------------

ready(function() {
    
    document.querySelector(".splash-form").addEventListener("submit", function(ev) { 
        post(
            "/Lead/Subscribe",
            JSON.stringify({ Email: ev.srcElement.querySelector("input").value, Source: "Survey" }),
            function(data) { alert("Thanks! Your email address has been received. This is a temporary message until I code a nicer thing like the textbox fading out or something.") }
            );
            
        ev.preventDefault();
    });

    
});