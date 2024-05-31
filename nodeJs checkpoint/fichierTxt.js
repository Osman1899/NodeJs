const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Le fichier "welcome.txt" a été créé avec succès!');
});
