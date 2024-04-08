// Define different row heights, lengths and column widths for different screens
const rowHeight = {
    sm: 68,
    md: 74,
  },
  rowLength = {
    sm: 5,
    md: 10,
  },
  columnWidth = { md: 69, xl: 56 };

/**
 * Calculate the Y and X positions of a box based on the day number and screen size.
 * @param {number} dayNumber - The number representing the day.
 * @param {string} screen - The screen size ("sm" for small, "md" for medium, "xl" for big).
 * @returns {number} - The calculated Y position.
 */

export const calculateBoxPositionY = (dayNumber, screen) => {
  // Calculate the number of row, where box is and the floor of that number
  const number = dayNumber / rowLength[screen],
    floorNumber = Math.floor(number);

  // Calculate the Y position based on the screen size(-1 for 5, 10 etc. for sm, and 10, 20 etc. for md)
  switch (screen) {
    case 'sm':
      return floorNumber === number
        ? parseInt(number - 1) * rowHeight[screen] - 12
        : parseInt(number) * rowHeight[screen] - 12;
    case 'md':
      return floorNumber === number
        ? parseInt(number - 1) * rowHeight[screen]
        : parseInt(number) * rowHeight[screen];
    default:
      return 0;
  }
};

export const calculateBoxPositionX = (dayNumber, screen) => {
  // Calculate the number of column, where box is and is it on the left side of calendar
  const [number, isLeftSide] =
    dayNumber % 10 === 0
      ? [9, false]
      : [(dayNumber % 10) - 1, dayNumber % 10 < 5];

  // Calculate the X position(-280 because of size of the box, and columnWidth[screen] / 4 to move a box directly in the middle of the day)
  return isLeftSide
    ? number * columnWidth[screen] + columnWidth[screen] / 4
    : number * columnWidth[screen] - 280 + columnWidth[screen] / 4;
};
