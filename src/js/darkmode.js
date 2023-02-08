if (localStorage.theme == "dark") {
  $("html").removeClass("bg-gray-200");
  $("html").addClass("bg-slate-800");
  $("html").addClass("dark");
  $("#dark-mode").prop("checked", true);
}

function changeDarkMode() {
  $("html").toggleClass("bg-gray-200");
  $("html").toggleClass("bg-slate-800");
  $("html").toggleClass("dark");
}

$("#dark-mode").click(() => {
  if (localStorage.theme == "dark") {
    localStorage.theme = "light";
    $("#dark-mode").prop("checked", false);
  } else {
    localStorage.theme = "dark";
    $("#dark-mode").prop("checked", true);
  }
  changeDarkMode();
});
