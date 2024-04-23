function generate() { 
  let dictionary = ""; 
  if (document.getElementById("lowercase").checked) { 
      dictionary += "qwertyuiopasdfghjklzxcvbnm"; 
  } 
  if (document.getElementById("uppercase").checked) { 
      dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
  } 
  if (document.getElementById("numbers").checked) { 
      dictionary += "1234567890"; 
  } 
  if (document.getElementById("symbols").checked) { 
      dictionary += "!@#$%^&*()_+-={}[];<>:"; 
  } 
  const length = document.querySelector( 
      'input[type="range"]').value; 

  if (length < 1 || dictionary.length === 0) { 
      return; 
  } 

  let password = ""; 
  for (let i = 0; i < length; i++) { 
      const pos = Math.floor(Math.random() * dictionary.length); 
      password += dictionary[pos]; 
  } 

  document.querySelector( 
      'textarea.text-password').value = password; 
} 

[ 
  ...document.querySelectorAll( 
      'input[type="checkbox"], button.btn-generate'), 
].forEach((elem) => { 
  elem.addEventListener("click", generate); 
}); 

document.querySelector('input[type="range"]').addEventListener( 
  "input", (e) => { 
      document.querySelector( 
          "span.number-length").textContent = e.target.value; 
      generate(); 
  }); 

document.querySelector("button.btn-generate").addEventListener( 
  "click", (e) => { 
      e.preventDefault(); 
      generate();
  });

document.querySelector("div.password button").addEventListener( 
  "click", () => { 
      const pass = document.querySelector('textarea.text-password').value; 
      navigator.clipboard.writeText(pass).then(() => { 
          document.querySelector( 
              "div.password button").innerHTML = "copied!"; 
          setTimeout(() => { 
              document.querySelector( 
                  "div.password button").innerHTML = "copy"; 
          }, 1000); 
      }); 
  }); 

generate();
