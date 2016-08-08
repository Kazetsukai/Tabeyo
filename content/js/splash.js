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
        request.timeout = 5000;
        request.ontimeout = error;
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
        
        document.querySelector(".splash-form button").setAttribute("disabled", "");
        document.querySelector(".splash-form input").setAttribute("disabled", "");
        document.querySelector(".splash-form").classList.remove("response-visible");
        
        var address = ev.srcElement.querySelector("input").value.trim();
        
        var error = function() {
            document.querySelector(".splash-form").classList.add("response-visible");
            document.querySelector(".submit-response").textContent = "Sorry, something went wrong. We couldn't write down your email address. Please try again a bit later!";
            document.querySelector(".splash-form button").removeAttribute("disabled");
            document.querySelector(".splash-form input").removeAttribute("disabled");
        }
        
        post(
            "/api/Lead/Subscribe",
            JSON.stringify({ Email: address, Source: "Survey" }),
            function(data) { 
                if (data.success) {
                    document.querySelector(".splash-form").classList.add("response-visible");
                    document.querySelector(".submit-response").textContent = "Thanks, we'll send you an email when we open!";
                    
                    var button = document.querySelector(".splash-form button");
                    if (button !== undefined)
                        button.remove();
                        
                    document.querySelector("#intro-text").remove();
                } else {
                    error();
                }
             },
             error
            );
            
        ev.preventDefault();
    });

    
});