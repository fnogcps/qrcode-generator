$("#qr-form").submit(async function (event) {
  event.preventDefault();

  const length = $("#text").val().length;
  if (length > 255 || length < 5) {
    alert("Invalid input length (min: 5 | max: 255)");
    return false;
  }

  try {
    const formData = new FormData(event.target);
    await axios.post("/generator.php", formData).then((res) => {
      $("#qr-modal").prop("hidden", false);
      $("#qr-modal").toggleClass("modal-open");
      $("#qr-code").attr("src", "data:image/jpeg;base64," + res.data);
      $(".btn-download").attr("href", "data:image/jpeg;base64," + res.data);
    });
  } catch (error) {
    console.log(error);
  }
});

$(".btn-circle").click(() => $("#qr-modal").toggleClass("modal-open"));
