class Habit {
  name: string;
  stoppedDate: Date;

  constructor(name: string, stoppedDate: Date) {
    this.name = name;
    this.stoppedDate = stoppedDate;
  }

  getDaysSinceStopped(): number {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - this.stoppedDate.getTime();
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    return days;
  }
}

class StreakApp {
  habits: Habit[];

  constructor() {
    this.habits = [];
  }

  addHabit(name: string, stoppedDate: Date): void {
    const habit = new Habit(name, stoppedDate);
    this.habits.push(habit);
  }

  displayHabits(): void {
    this.habits.forEach((habit, index) => {
      console.log(`Habit ${index + 1}: ${habit.name}`);
    });
  }

  getDaysSinceStopped(habitIndex: number): number {
    const habit = this.habits[habitIndex - 1];
    if (habit) {
      return habit.getDaysSinceStopped();
    }
    return -1; // Return -1 if habit index is invalid
  }
}

const app = new StreakApp();

// Add habits
const smokingDate = new Date('2023-04-28');
app.addHabit('Smoking', smokingDate);

const exerciseDate = new Date('2023-04-15');
app.addHabit('Exercise', exerciseDate);

// Display habits
app.displayHabits();

// Get days since stopped for a habit
const habitIndex = 1; // Change this to the desired habit index
const daysSinceStopped = app.getDaysSinceStopped(habitIndex);
if (daysSinceStopped !== -1) {
  console.log(`Days since stopped: ${daysSinceStopped}`);
} else {
  console.log('Invalid habit index.');
}

