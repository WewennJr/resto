function getTime() {
    var today = new Date();
    var annee = today.getFullYear();
    var mois = today.getMonth()+1; // car renvoie un nombre entre 0 et 11
    var jour = today.getDate();
    var heure = today.getHours();
    var minute = today.getMinutes();
    var seconde = today.getSeconds();

    mois = rajouter0(mois);
    jour = rajouter0(jour);
    heure = rajouter0(heure);
    minute = rajouter0(minute);
    seconde = rajouter0(seconde);

    document.getElementById("time").innerHTML = jour + "/" + mois + "/" + annee + " - " + heure + ":" + minute + ":" + seconde

    var t = setTimeout(getTime,500);
}

function rajouter0(i) {
  if (i < 10) {i = "0" + i};
  return i;
}



function definirmenu() {
    var date_pour_heure = new Date();
    var heure = date_pour_heure.getHours();

    if (11 < heure && heure < 14) {
        document.getElementById("menu").innerHTML = "Menu du Midi disponible :";
        document.getElementById("entree").innerHTML = "Entree : Salade verte";
        document.getElementById("plat").innerHTML = "Plat : Pâtes carbonara";
        document.getElementById("desert").innerHTML = 'Desert : Glace à la mangue <a href="presentation.html#produit_maison"><em>maison</em></a>.'; //lien vers la présentation pour les porduit maison !
    }
    else if (17 < heure && heure < 23) {
        document.getElementById("menu").innerHTML = "Menu du Soir disponible :";
        document.getElementById("entree").innerHTML = "Entree : Huitres et crevettes";
        document.getElementById("plat").innerHTML = "Plat : Entrecôte";
        document.getElementById("desert").innerHTML = 'Desert : Gâteau au chocolat <a href="presentation.html#produit_maison"><em>maison</em></a>.'; //lien vers la présentation pour les porduit maison !
    }
    else {
        document.getElementById("menu").innerHTML = "Pas de menu disponible :";
    }
}


getTime();
definirmenu();