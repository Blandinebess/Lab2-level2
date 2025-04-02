function fortuneTeller(name, age) {
  let nameFortune = "Blandine";
  let ageFortune = "17";

  // Name-based fortunes
  if (name.length > 7) {
    nameFortune = "will marry late in life.";
  } else if (name.length < 5) {
    nameFortune = "will marry within a year.";
  } else {
    nameFortune = "will encounter a once-in-a-lifetime opportunity.";
  }

  if (name.startsWith("R")) {
    nameFortune += " And will be rich.";
  }
  if (name.includes("i")) {
    nameFortune += " Also, will fall in love this week.";
  }

  // Age-based fortunes
  if (age < 18) {
    ageFortune = "will achieve something extraordinary in their studies.";
  } else if (age >= 18 && age <= 30) {
    ageFortune = "will soon find their passion and excel in it.";
  } else if (age > 30) {
    ageFortune = "will embark on an exciting financial journey.";
  }

  // Combine fortunes
  return `Based on my vision, ${name} ${nameFortune} Additionally, ${ageFortune}`;
}

// Prompt user for input
const userName = prompt("Enter your name:");
const userAge = parseInt(prompt("Enter your age:"));

// Call the fortuneTeller function and log the result
console.log(fortuneTeller(userName, userAge));
