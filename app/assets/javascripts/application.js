// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require less-1.1.3.min
//= require jquery
//= //require jquery_ujs
//= require jquery-ui-1.8.16.custom.min
//= require jquery.jclock


//= //require_tree .
(function($){
    var _csrftoken = $('meta[name="csrf-token"]').attr('content');
    
    if(!_csrftoken){throw 'csrf token not found';}
    
    $(document).ajaxSend(function(evt, xhr, settings) {
        xhr.setRequestHeader('X-CSRF-Token', _csrftoken);
    });
})(jQuery);

var isIpad = navigator.userAgent.match(/iPad/i) ? true : false;
