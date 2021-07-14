//Function for masking email to get in the thank you page later
export function maskEmail(email) {
  let maskedEmail = "";
  let x = 0;

  for (var i = 0; i < email.length; i++) {
    if (i === 0) {
      maskedEmail += email[i];
    } else if (email[i] !== "@" && email[i] !== "." && x <= 3) {
      maskedEmail += "*";
      x += 1;
    } else {
      maskedEmail += email[i];
      x = 0;
    }
  }

  return maskedEmail;
}
