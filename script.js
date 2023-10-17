
const presentTime = dayjs();
const currentTime = document.getElementById("currentDay");
const saveBtns = document.querySelectorAll(".saveBtn");


saveBtns.forEach((saveBtn) => {
  saveBtn.addEventListener("click", saveTime);
});

// Display the current date
displayDate();

// Set text values for the time blocks
setTextValue();

// Apply color coding to time blocks
timeBlockColor();

// Function to save user input to local storage
function saveTime(event) {
  const textArea = event.target.previousElementSibling;
  const time = event.target.parentElement.id;
  localStorage.setItem(time, textArea.value);
}

// Function to apply color coding to time blocks
function timeBlockColor() {
  const currentHour = presentTime.hour();

  document.querySelectorAll(".time-block").forEach((timeBlock) => {
    const timeBlockHour = parseInt(timeBlock.id);
    if (timeBlockHour < currentHour) {
      timeBlock.classList.add("past");
    } else if (timeBlockHour === currentHour) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  });
}

// Function to set text values for time blocks from local storage
function setTextValue() {
  document.querySelectorAll(".time-block").forEach((timeBlock) => {
    const textArea = timeBlock.querySelector(".description");
    const time = timeBlock.id;
    textArea.value = localStorage.getItem(time);
  });
}

// Function to display the current date
function displayDate() {
  currentTime.textContent = presentTime.format("dddd, MMMM D, YYYY");
}
