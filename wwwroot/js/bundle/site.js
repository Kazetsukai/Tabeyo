import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

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

function get(url, data, success, error) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
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

import { createStore } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ProductBox from "../../components/ProductBox/ProductBox";
import TabeyoPage from "../../components/TabeyoPage/TabeyoPage";


get("/Product", null, data => {  
  ReactDOM.render(  
    <TabeyoPage />,
    document.getElementById('content')
  );
});