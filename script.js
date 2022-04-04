$("#submit").on("click", function () {
  let name = $("#name");
  let email = $("#email");
  let number = $("#phone");
  let required = [name, email, number];

  for (let i = 0; i < required.length; i++) {
    if (required[i].val() === "") {
      $("p").text("Please Fill Out Required Fields");
      $("p").addClass("warning");
      required[i].prev().addClass("warning");
    }
    if (!(required[i].val() === "")) {
      $("p").text("");
      $("p").removeClass("warning");
      required[i].prev().removeClass("warning");
    }
  }
  if (!$("label").hasClass("warning")) {
    $("form").remove();
    $("h2").html("<em>Thanks for your feedback!</em>");
  }
});