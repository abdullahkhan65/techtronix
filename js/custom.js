document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    function getYear() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        document.querySelector("#displayYear").innerHTML = currentYear;
    }
    getYear();
  
    // Initialize EmailJS
    emailjs.init({
        publicKey: "Bjwhe9HMOiU_AEfP4",
      });
  
    // Handle the form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission
    
      const name = document.getElementById('name').value;
      const phone = document.getElementById('inputPhone').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const date = document.getElementById('inputDate').value;
    
      // Send the email using the template
      emailjs.send("service_0oyj2i2", "template_vdgepbg", {
        from_name: name,
        from_phone: phone,
        from_email: email,
        message: message,
        from_date: date
      })
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("Oops! Something went wrong. Please try again later.");
      });
    });
  
    // Nice select
    $(document).ready(function () {
        $('select').niceSelect();
    });
  
    // Date picker
    $(function () {
        $("#inputDate").datepicker({
            autoclose: true,
            todayHighlight: true
        }).datepicker('update', new Date());
    });
  
    // Owl carousel slider
    $('.team_carousel').owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        autoplay: false,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            576: {
                items: 2,
            },
            992: {
                items: 3
            }
        }
    });
  });
  