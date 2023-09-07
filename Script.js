document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getUTCDay();
    const currentDay = daysOfWeek[currentDayIndex];
    const currentUTCTime = currentDate.toISOString().substr(11, 8);

    // Update the elements with the specific data-testid attributes
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
});
