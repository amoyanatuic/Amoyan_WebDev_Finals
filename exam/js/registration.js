$(document).ready(function() {
      $('#myForm input').blur(function() {
        if (!$(this).val()) {
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
        }
      });
    });


function Alert(){
  
   var inputVal = document.getElementById("myInput").value;
  var inputVal2 = document.getElementById("label").value;
  if(inputVal=="" | inputVal2==""){
    alert('Please fill up the credentials correctly.');
  }
  else{
    alert('Thank you for submitting your invoice! Have a blessed day! :)');
  }
  
        var password = document.getElementById("myInput txtPassword").value;
        var confirmPassword = document.getElementById("myInput txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
  
  var classes = document.getElementById("class").value;
  if(classes == 1){
    alert("Please choose an option for classes");
  }
  
}

var currentCallback;

// override default browser alert
window.alert = function(msg, callback){
  $('.message').text(msg);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function(){
  
  // add listener for when our confirmation button is clicked
    $('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
        $('.customAlert').css('display', 'none');
    }, 300);
  })
  
  $('.rab').click(function(){
    alert("If you think about anything, you are actually doing a recursive function which resolves your neurons into a deep pi calculation. You are then executing about 4294 threads in your brain, which do a parallel computation.", function(){
      console.log("Callback executed");
    })
  });
