const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-value");

    if (btn.id === "clear") {
      expression = "";
      display.textContent = "0";
    } else if (btn.id === "equals" || val === "=") {
      try {
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString();
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    } else {
      expression += val;
      display.textContent = expression;
    }
  });
});
