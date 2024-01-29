function verifierChamps(event) {
    
    event.preventDefault();
  
   
    const prenom = document.querySelector('#first-name').value;
    const nom = document.querySelector('#last-name').value;
    const commentaire = document.querySelector('#message').value;
  
  
    if (prenom === '' || nom === '' || commentaire === '') {
      
      document.querySelector('#error-message').style.display = 'block';
    } else {
      
      event.target.submit();
    }
  }
  
 
  document.querySelector('form').addEventListener('submit', verifierChamps);