const intakeDialog = document.querySelector("#client-intake");
let intakeTrigger;
document.querySelectorAll("[data-open-intake]").forEach((button) => {
  button.addEventListener("click", () => {
    intakeTrigger = button;
    intakeDialog.showModal();
    document.body.classList.add("intake-open");
  });
});
intakeDialog.querySelector(".intake-close").addEventListener("click", () => intakeDialog.close());
intakeDialog.addEventListener("close", () => {
  document.body.classList.remove("intake-open");
  intakeTrigger?.focus();
});
