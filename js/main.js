main.js
// jQuery interactions and Ajax
$(document).ready(function () {

  // jQuery component 1: smooth fade-in effect for cards and awards
  $(".program-card, .award-img, .vue-box").hide().fadeIn(900);

  // jQuery component 2 with Ajax: load FAQs from local JSON file
  $("#load-faqs").on("click", function () {
    $.ajax({
      url: "data/faqs.json",
      method: "GET",
      dataType: "json",
      success: function (faqs) {
        var faqHTML = "";

        $.each(faqs, function (index, faq) {
          faqHTML += `
            <div class="faq-item">
              <h3>${faq.question}</h3>
              <p>${faq.answer}</p>
            </div>
          `;
        });

        $("#faq-results").hide().html(faqHTML).slideDown(500);
      },
      error: function () {
        $("#faq-results").html(
          '<div class="alert alert-warning">FAQs could not load. Please check the data/faqs.json file.</div>'
        );
      }
    });
  });

});

// Vue component
var app = new Vue({
  el: "#vue-app",
  data: {
    level: ""
  }
});