(function () {
  let yesCount = 0;
  let noCount = 0;
  let mailSent = false;

  // INITIERA EMAILJS – EN GÅNG
  emailjs.init("email publik API");

  function sendEmail() {
    if (mailSent) return;
    mailSent = true;

    emailjs.send("service_key", "templat_kay", {
      yes: yesCount,
      no: noCount,
      device: /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "iOS" : "Other"
    }).then(
      function () {
        console.log("Mail skickat ✅");
      },
      function (error) {
        console.log("Mail FEL ❌", error);
      }
    );
  }

  // EXEMPEL: när JA klickas
  document.getElementById("yesBtn")?.addEventListener("click", function () {
    yesCount++;
    sendEmail();
  });

  // EXEMPEL: när NEJ klickas
  document.getElementById("noBtn")?.addEventListener("click", function () {
    noCount++;
  });

})();

