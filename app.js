var Habit = /** @class */ (function () {
    function Habit(name, stoppedDate) {
        this.name = name;
        this.stoppedDate = stoppedDate;
    }
    Habit.prototype.getDaysSinceStopped = function () {
        var currentDate = new Date();
        var timeDifference = currentDate.getTime() - this.stoppedDate.getTime();
        var days = Math.floor(timeDifference / (1000 * 3600 * 24));
        return days;
    };
    return Habit;
}());
var StreakApp = /** @class */ (function () {
    function StreakApp() {
        this.habits = [];
    }
    StreakApp.prototype.addHabit = function (name, stoppedDate) {
        var habit = new Habit(name, stoppedDate);
        this.habits.push(habit);
    };
    StreakApp.prototype.displayHabits = function () {
        this.habits.forEach(function (habit, index) {
            console.log("Habit ".concat(index + 1, ": ").concat(habit.name));
        });
    };
    StreakApp.prototype.getDaysSinceStopped = function (habitIndex) {
        var habit = this.habits[habitIndex - 1];
        if (habit) {
            return habit.getDaysSinceStopped();
        }
        return -1; // Return -1 if habit index is invalid
    };
    return StreakApp;
}());
var app = new StreakApp();
// Add habits
var smokingDate = new Date('2023-04-28');
app.addHabit('Smoking', smokingDate);
var exerciseDate = new Date('2023-04-15');
app.addHabit('Exercise', exerciseDate);
// Display habits
app.displayHabits();
// Get days since stopped for a habit
var habitIndex = 1; // Change this to the desired habit index
var daysSinceStopped = app.getDaysSinceStopped(habitIndex);
if (daysSinceStopped !== -1) {
    console.log("Days since stopped: ".concat(daysSinceStopped));
}
else {
    console.log('Invalid habit index.');
}
