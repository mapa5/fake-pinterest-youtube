let form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form);


    let email = formData.get('Email');
    let password = formData.get('Password');
    console.log(formData);
    console.log(email);
    console.log(password);

    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password)

});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
    // Envoyez l'ID token à votre backend pour vérification
}

// // test.js
// test('should store and retrieve credentials from localStorage', () => {
//     // Stocker des données fictives
//     localStorage.setItem('testUsername', 'testuser');
//     localStorage.setItem('testPassword', 'testpassword');

//     // Récupérer les données
//     const username = localStorage.getItem('testUsername');
//     const password = localStorage.getItem('testPassword');

//     // Vérifier les valeurs
//     expect(username).toBe('testuser');
//     expect(password).toBe('testpassword');

//     // Nettoyer
//     localStorage.removeItem('testUsername');
//     localStorage.removeItem('testPassword');
// });