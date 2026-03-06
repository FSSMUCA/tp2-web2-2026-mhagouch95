let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {

    if (valeurs[i] === "") {
        console.log("(chaine vide) -> falsy");
    }

    else if (valeurs[i]) {
        console.log(JSON.stringify(valeurs[i]), "-> truthy");
    }

    else {
        console.log(JSON.stringify(valeurs[i]), "-> falsy");
    }

}