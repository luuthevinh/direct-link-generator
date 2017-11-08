/**
* googledrive-generator.js
*
* author: Vinh LuuThe
* github: https://github.com/luuthevinh/googledrive-generator
* https://luuthevinh.me
*
*/

$(document).ready(function() 
{
  $('#generate-link').click(function() 
  {
    var sharelink = $.trim($('#sharelink').val());
    if (sharelink.length <= 0)
    {
      $('#error-alert').show();
      return;
    }

    var fileId = '';
    var regexp = /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/(edit|view)\?usp=sharing/;
    var match = sharelink.match(regexp);
    
    if (match)
    {
      fileId = match[1];
    }
    else
    {
  	  regexp = /https:\/\/drive\.google\.com\/open\?id\=(.*?)$/;
      match = sharelink.match(regexp);
      if (match)
      {
	      fileId = match[1];
      }
    }

    if (fileId)
    {
  	  $('#error-alert').hide();
  	  $('#result-link').val('https://drive.google.com/uc?export=download&id=' + fileId);
    }
    else
    {
  	  $('#error-alert').show();
    }
  });

  $('#copy-link').click(function() 
  {
    var copyText = $('#result-link');
    if(copyText.val().length <= 0)
      return;

    copyText.select();
    document.execCommand('Copy');

    $('#copy-link').addClass('btn-success');
    $('#copy-link').text("Đã copy!");
  });

  $('#open-link').click(function() 
  {
    var url = $('#result-link').val();
    if(url.length <= 0)
      return;

    var win = window.open(url);
    win.focus();
  });
});
