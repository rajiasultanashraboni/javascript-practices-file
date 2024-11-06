let weight = 68;
let height = 1.75;

// Calculate BMI
let bmi = weight / (height * height);

// Determine BMI category
let category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
  category = "Normal weight";
} else if (bmi >= 25 && bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obese";
}
