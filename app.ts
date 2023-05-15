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

     getStoppedDateTime(): string {
    const options = { year: 'numeric', month: 'long', weekday: 'long', day: 'numeric' };
    return this.stoppedDate.toLocaleString('en-US', options);
  }

    
  }
  
  class StreakApp {
    habits: Habit[];
    habitList: HTMLElement | null;
  
    constructor() {
      this.habits = [];
      this.habitList = document.getElementById('habitList');
    }
  
    addHabit(name: string, stoppedDate: Date): void {
      const habit = new Habit(name, stoppedDate);
      this.habits.push(habit);
    }
  
    displayHabits(): void {
      if (!this.habitList) return; 
  
      this.habitList.innerHTML = ''; 
  
      this.habits.forEach((habit, index) => {
        const habitElement = document.createElement('div');
        habitElement.classList.add('habit');
        habitElement.innerHTML = `
          <h3>Habit ${index + 1}: ${habit.name}</h3>
          <p>Stopped Time: ${habit.getStoppedDateTime()}</p>
          <p>Days since stopped: ${habit.getDaysSinceStopped()}</p>
        `;
        this.habitList.appendChild(habitElement);
      });
    }
  }
  
  
  
  const app = new StreakApp();
  
  app.addHabit('Smoking', new Date('2023-04-28'));
  app.addHabit('Exercise', new Date('2023-04-15'));
  app.addHabit('Take a walk', new Date('2023-03-10'));
  app.addHabit('Cycling', new Date('2021-02-15'));
  app.addHabit('Healthy Eating', new Date('2020-04-14'));
  app.displayHabits();
  