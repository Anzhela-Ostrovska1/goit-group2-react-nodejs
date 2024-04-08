// Get the current date
const currentDate = new Date();

// Store the current year and month (adding 1 to the month as JavaScript counts months from 0 to 11)
const defaultDate = [currentDate.getFullYear(), currentDate.getMonth() + 1];

// Function to get a new date based on the direction ('forward' or 'back')
export const getNewDate = (date = defaultDate, direction) => {
  const [year, month] = date; // Destructure the year and month from the provided date
  // month.padStart(2, '0');

  switch (direction) {
    case 'forward':
      // If moving forward and the month is December, move to the next year, January
      if (month >= 12) {
        return [year + 1, 1];
      }
      // Otherwise, move to the next month of the same year
      return [year, month + 1];
    case 'back':
      // If moving backward and the month is January, move to the previous year, December
      if (month <= 1) {
        return [year - 1, 12];
      }
      // Otherwise, move to the previous month of the same year
      return [year, month - 1];
    default:
      // Return the default date if no valid direction is specified
      return defaultDate;
  }
};
