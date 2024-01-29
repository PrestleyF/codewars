// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"


function isVowel(letter) {
    return /^[aeiou]$/i.test(letter);
  }
  
  // Helper function to check if a letter is a consonant
  function isConsonant(letter) {
    return /^[bcdfghjklmnpqrstvwxyz]$/i.test(letter);
  }
function nicknameGenerator(name){
    if (name.length <= 3) {
        return 'Error: Name too short';
      } else if (name.length >= 3 && isConsonant(name[2])) {
        return name.slice(0, 3);
      } else if (name.length >= 4 && isVowel(name[2])) {
        return name.slice(0, 4);
      }
    }
  console.log(nicknameGenerator("Jimmy"), "Jim");
  console.log(nicknameGenerator("Samantha"), "Sam");
  console.log(nicknameGenerator("Sam"), "Error: Name too short");
  console.log(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
  console.log(nicknameGenerator("Melissa"), "Mel");
  console.log(nicknameGenerator("James"), "Jam");