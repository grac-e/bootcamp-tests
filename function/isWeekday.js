function isWeekday(day) {
  if (!day.toLowerCase().endsWith('day')) {
    return "Please enter a day of the week";
  }
    return day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday';
    return day !== 'Saturday' || day !== 'Sunday'
  }
  
  console.log(isWeekday('Saturday'));
  console.log(isWeekday('Sunday'));
  console.log(isWeekday('Monday'));
  console.log(isWeekday('Tuesday'));
  console.log(isWeekday('Wednesday'));
  console.log(isWeekday('Thursday'));
  console.log(isWeekday('Friday'));