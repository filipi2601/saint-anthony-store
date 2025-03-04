document.addEventListener("DOMContentLoaded", function () {
  axios.get("./../includes/header.html").then((response) => {
    document.getElementsByTagName("header")[0].innerHTML = response.data;
  });

  axios.get("./../includes/footer.html").then((response) => {
    document.getElementsByTagName("footer")[0].innerHTML = response.data;
  });

  document
    ?.getElementById("copy-link")
    ?.addEventListener("click", function (event) {
      event.preventDefault();
      const link = window.location.href;
      navigator.clipboard.writeText(link).then(function () {
        alert("Copied!");
      });
    });

  document
    ?.getElementById("share-facebook")
    ?.addEventListener("click", function (event) {
      event.preventDefault();

      const link = window.location.href; // Pega o URL atual da página
      const facebookUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(link);
      window.open(facebookUrl, "_blank", "width=600,height=400");
    });
});
