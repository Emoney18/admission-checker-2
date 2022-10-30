let appInfo = {
  ErrorMessage: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    DateofBirth: "",
    Gender: 0,
    Email: "",
    mobileNumber: "",
    numberofsitting: "",
    utme: "",
    putme: "",


    

    isValid: function () {
      this.firstName = document.getElementById("textfirstname").value;
      this.lastName = document.getElementById("textlastname").value;
      this.dateofBirth = document.getElementById("textdateofBirth").value;
      this.Email = document.getElementById("textemail").value;
      this.mobileNumber = document.getElementById("textmobile").value;
      this.numberofsitting = document.getElementById('textnumberofsitting')
      this.utme = document.getElementById('textutme')
      this.putme = document.getElementById('textputme')
      this.olevel = document.querySelectorAll('form .grades')
      this.maths = document.getElementById('select1')
      this.english = document.getElementById('select2')
      this.select3 = document.getElementById('select3')
      this.select4 = document.getElementById('select4')
      this.select5 = document.getElementById('select5')

      
      

      if (this.firstName === "" || this.firstName.length < 2) {
        appInfo.ErrorMessage = "kindly specify your first name";
        return false
      }

         
      if (this.lastName === "" || this.lastName.length < 2) {
        appInfo.ErrorMessage = "kindly specify your last name";
        return false
      }


      if (this.dateofBirth === "" || this.dateofBirth.length != 10) {
        appInfo.ErrorMessage = "kindly specify your date of birth";
        return false
      }

          
      if (this.Email === "" || this.Email.length < 5 || !this.Email.includes("@")) {
        appInfo.ErrorMessage = "kindly specify your valid Email address";
        return false;
      }
      if (this.mobileNumber === "" || this.mobileNumber.length != 11) {
        appInfo.ErrorMessage = "kindly specify your valid mobile number";
        return false;
      }
      if (this.noOfSittig !== 1) {
        console.log('failed!!!')
        window.alert('you are requred to submit only one sitting')
        return false
             
      }
          
      return true
    },
  }
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault(),
  checkAmission()
})

function checkAmission() {

  if (!appInfo.personalInfo.isValid()) {
    document.getElementById('errmessage').innerText = appInfo.ErrorMessage
  }
}

// if (grade === 'A1') {
//   return 10
// }
// if (grade === 'B2') {
//   return 9
// }
// if (grade === 'B3') {
//   return 8
// }
// if (grade === 'C4') {
//   return 7
// }
// if (grade === 'C5') {
//   return 6
// }
// if (grade === 'C6') {
//   return 5
// }
// if (grade === 'D7') {
//   return 4
// }
// if (grade === 'E8') {
//   return 3
// }
// if (grade === 'F9') {
//   return 0
// }

// prevarsity: {
//   utme: 0,
//     putme: 0,
//     totalscore: 0,
//     isValid: function () {

//       this.utme = document.getElementById("candutme").value
//       this.putme = document.getElementById("candputme")

//       if (this.utme === || isNaN(Number(this.utme))) {
//         appInfo.ErrorMessage = "Kindly...Input a valid UTME score"
//         return 0;
//       } if (number(this.utme) > 400) {
//         appInfo.ErrorMessage = "your score is above 400... kindly input a valid score"
//         return 0;
//       } if (number(this.utme) < 100) {
//         appInfo.ErrorMessage = "I am sorry, you did nt meet cut off mark"
//         return 0;
//       } if (number(this.utme) > 400) {
//         appInfo.ErrorMessage = "your score is above 400... kindly input a valid score"
//         return 0;
//       } if (number(this.utme) > 400) {
//         appInfo.ErrorMessage = "your score is above 400... kindly input a valid score"
//         return 0;
//       } if (number(this.utme) === 0) {
//         appInfo.ErrorMessage = "Kindly input a valid putme score"
//         return 0;
//       } if (this.putme === " " || isNaN(number(this.putme))) {
//         appInfo.ErrorMessage = "Input a valid putme score"
//         return 0
//       } if (number(this.putme) === 0) {
//         appInfo.ErrorMessage = "Input a valid utme score"
//         return 0
//       } if (number(this.putme) > 20)
//         appInfo.ErrorMessage = "your score is above 20....kindly input a valid score"
//       return 0
//   } if (number(this.putme) < 12) {
//     appInfo.ErrorMessage = "i am sorry, you did not meet the cut off mark"
//     return 0
//   } else {

//   }
//   calculateUtmeScore = math.round(this.utme / 8)  
//   totalscore = calculateUtmeScore + putmescore

// }


// OlevelScore: {
//   onesitting: 0,
//     maths: 0,
//     english: 0,
//     select3: 0,
//     select3gr: 0,
//     select4: 0,
//     select5: 0,
//     select5gr: 0,
//     isValid: function () {
//       this.onesitting = document.getElementById("candsittings").value
//       this.maths = document.getElementById("candsittings").value
//       this.onesitting = document.getElementById("candsittings").value
//       this.onesitting = document.getElementById("candsittings").value
//       this.onesitting = document.getElementById("candsittings").value
//       this.onesitting = document.getElementById("candsittings").value
//       this.onesitting = document.getElementById("candsittings").value
//       this.onesitting = document.getElementById("candsittings").value



//     }
// }

      

        







    