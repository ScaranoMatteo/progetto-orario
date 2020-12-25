//
var orario=[
      ["Domenica"],
      ["Lunedì", "Telecomunicazioni", "Telecomunicazioni", "Telecomunicazioni", "Storia", "Robotica", "Robotica", null, null],
      ["Martedì", "Italiano", "Italiano", "Inglese", "Informatica", "Matematica", "Matematica", null, null],
      ["Mercoledì", "Informatica", "Informatica", "Sistemi e reti", "Sistemi e reti", null, null, "Ed. fisica", "Ed. fisica"],
      ["Giovedì", "Sistemi e reti", "Sistemi e reti", "IRC", "Italiano", "T.P.S.I.T.", "Matematica", null, null],
      ["Venerdì", "Italiano", "Storia", "T.P.S.I.T.", "Matematica", "Inglese", "Inglese", null, null],
      ["Sabato", "T.P.S.I.T.", "T.P.S.I.T.", "Informatica", "Informatica", "Informatica", null, null, null]
  ];

//
var giorniDiVacanza=[
      // Giorno dei morti
      [2, 10, 2020, "Giorno dei morti", "fas fa-cross"],

      // Festa dell'Immacolata
      [7, 11, 2020, "Festa dell'Immacolata", "fas fa-church"],
      [8, 11, 2020, "Festa dell'Immacolata", "fas fa-church"],

      // Vacanze di Natale
      [24, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [25, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [26, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [27, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [28, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [29, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [30, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [31, 11, 2020, "Vacanze di Natale", "fas fa-snowman"],
      [1, 0, 2021, "Vacanze di Natale", "fas fa-snowman"],
      [2, 0, 2021, "Vacanze di Natale", "fas fa-snowman"],
      [3, 0, 2021, "Vacanze di Natale", "fas fa-snowman"],
      [4, 0, 2021, "Vacanze di Natale", "fas fa-snowman"],
      [5, 0, 2021, "Vacanze di Natale", "fas fa-snowman"],
      [6, 0, 2021, "Vacanze di Natale", "fas fa-snowman"],

      // Vacanze di Carnevale
      [15, 1, 2021, "Vacanze di Carnevale", "fas fa-theater-masks"],
      [16, 1, 2021, "Vacanze di Carnevale", "fas fa-theater-masks"],

      // Vacanze di Pasqua
      [1, 3, 2021, "Vacanze di Pasqua", "fas fa-egg"],
      [2, 3, 2021, "Vacanze di Pasqua", "fas fa-egg"],
      [3, 3, 2021, "Vacanze di Pasqua", "fas fa-egg"],
      [4, 3, 2021, "Vacanze di Pasqua", "fas fa-egg"],
      [5, 3, 2021, "Vacanze di Pasqua", "fas fa-egg"],
      [6, 3, 2021, "Vacanze di Pasqua", "fas fa-egg"],

      // Festa della Liberazione
      [25, 3, 2021, "Festa della Liberazione", "fas fa-flag"],

      // Festa del Lavoro
      [1, 4, 2021, "Festa del Lavoro", "fas fa-briefcase"],

      // Festa della Repubblica
      [2, 5, 2021, "Festa della Repubblica", "fas fa-university"],
  ];

function paginaCaricata() {
  //
  var oggi=new Date(2020, 11, 25, 8, 15);

  //
  var totaleMinuti=oggi.getHours()*60+oggi.getMinutes();

  //
  orarioOdierno(oggi, oggi.getDay(), totaleMinuti);
}

function orarioOdierno(oggi, i, totaleMinuti) {
  if(giornoSenzaScuola(oggi)) {
    //
    document.getElementById("tabella").remove();

    //
    var image=document.createElement("img");
    image.setAttribute("src", "img/school-closed.jpg");
    image.setAttribute("alt", "scuola chiusa");
    image.setAttribute("class", "img-fluid");
    document.getElementById("info").appendChild(image);
  } else if(giornoDiVacanza(oggi)) {
    //
    document.getElementById("tabella").remove();

    //
    var image=document.createElement("img");
    image.setAttribute("src", "img/school-closed.jpg");
    image.setAttribute("alt", "scuola chiusa");
    image.setAttribute("class", "img-fluid");
    document.getElementById("info").appendChild(image);

    //
    var title=document.createElement("h3");
    //
    var icon=document.createElement("i");
    icon.setAttribute("class", iconaGiornoDiVacanza(oggi)+" icona-vacanza");
    title.appendChild(icon);
    //
    var span=document.createElement("span");
    var text=document.createTextNode(testoGiornoDiVacanza(oggi));
    span.appendChild(text);
    title.appendChild(span);
    document.getElementById("info").appendChild(title);
  } else if(i==0) {
    //
    document.getElementById("tabella").remove();

    //
    var image=document.createElement("img");
    image.setAttribute("src", "img/school-closed.jpg");
    image.setAttribute("alt", "scuola chiusa");
    image.setAttribute("class", "img-fluid");
    document.getElementById("info").appendChild(image);

    //
    var title=document.createElement("h3");
    //
    var icon=document.createElement("i");
    icon.setAttribute("class", "far fa-calendar-times icona-vacanza");
    title.appendChild(icon);
    //
    var span=document.createElement("span");
    var text=document.createTextNode("Oggi è Domenica!");
    span.appendChild(text);
    title.appendChild(span);
    document.getElementById("info").appendChild(title);
  } else if(i!=0 && totaleMinuti<480) {
    riempiTabella(i);

    var div=document.createElement("div");
    div.setAttribute("class", "alert alert-danger messaggio");
    var text=document.createTextNode("Le lezioni di oggi devono ancora iniziare!");
    div.appendChild(text);

    //
    document.getElementById("info").appendChild(div);
  } else if((i!=0 && i!=3 && i!=6 && totaleMinuti>=780) || (i==6 && totaleMinuti>=730) || (i==3 && totaleMinuti>=1040)) {
    riempiTabella(i);

    var div=document.createElement("div");
    div.setAttribute("class", "alert alert-success messaggio");
    var text=document.createTextNode("Le lezioni di oggi sono finite!");
    div.appendChild(text);

    //
    document.getElementById("info").appendChild(div);
  } else if(i==3 && totaleMinuti>=680 && totaleMinuti<940) {
    riempiTabella(i);

    var div=document.createElement("div");
    div.setAttribute("class", "alert alert-warning messaggio");

    var paragraph=document.createElement("p");
    paragraph.setAttribute("class", "testo-messaggio");
    var text=document.createTextNode("Le lezioni di oggi non sono ancora finite!");
    paragraph.appendChild(text);
    div.appendChild(paragraph);

    var paragraph=document.createElement("p");
    paragraph.setAttribute("class", "testo-messaggio");
    var text=document.createTextNode("Educazione fisica inizia alle 15:40.");
    paragraph.appendChild(text);
    div.appendChild(paragraph);

    //
    document.getElementById("info").appendChild(div);
  } else if(i!=0) {
    riempiTabella(i);

    evidenziaMateriaAttuale(i, totaleMinuti);

    //
    //
    var div=document.createElement("div");
    div.className="info-orario-odierno";

    //
    var paragraph1=document.createElement("p");
    //
    var b=document.createElement("b");
    var text=document.createTextNode("Materia attuale: ");
    b.appendChild(text);
    paragraph1.appendChild(b);
    //
    var span=document.createElement("span");
    var text=document.createTextNode(materiaAttuale(i, totaleMinuti));
    span.appendChild(text);
    paragraph1.appendChild(span);

    //
    var paragraph2=document.createElement("p");
    //
    var b=document.createElement("b");
    var text=document.createTextNode("Tempo rimanente alla fine della lezione: ");
    b.appendChild(text);
    paragraph2.appendChild(b);
    //
    var span=document.createElement("span");
    var text=document.createTextNode(minutiRimanenti(totaleMinuti)==1?minutiRimanenti(totaleMinuti)+" minuto":minutiRimanenti(totaleMinuti)+" minuti");
    span.appendChild(text);
    paragraph2.appendChild(span);

    //
    var paragraph3=document.createElement("p");
    //
    var b=document.createElement("b");
    var text=document.createTextNode("Materia successiva: ");
    b.appendChild(text);
    paragraph3.appendChild(b);
    //
    var span=document.createElement("span");
    var text=document.createTextNode(materiaSuccessiva(i, totaleMinuti));
    span.appendChild(text);
    paragraph3.appendChild(span);

    //
    var a=document.createElement("a");
    a.setAttribute("href", "orario-completo.html");
    //
    var icon=document.createElement("i");
    icon.setAttribute("class", "far fa-calendar-alt icona-link");
    a.appendChild(icon);
    //
    var span=document.createElement("span");
    var text=document.createTextNode("Visualizza Orario completo");
    span.appendChild(text);
    a.appendChild(span);

    //
    div.appendChild(paragraph1);
    div.appendChild(paragraph2);
    div.appendChild(paragraph3);
    div.appendChild(a);

    //
    document.getElementById("info").appendChild(div);
  }
}

function giornoSenzaScuola(oggi) {
  var oggiInMillisecondi=oggi.getTime();
  var inizioScuola=new Date(2020, 8, 14, 8, 0);
  var fineScuola=new Date(2021, 5, 10, 13, 0);

  //
  if((oggiInMillisecondi<inizioScuola.getTime()) || (oggiInMillisecondi>fineScuola.getTime())) {
    return true;
  }
}

function giornoDiVacanza(oggi) {
  for(var i=0; i<giorniDiVacanza.length; i++) {
    if(giorniDiVacanza[i][0]==oggi.getDate() && giorniDiVacanza[i][1]==oggi.getMonth() && giorniDiVacanza[i][2]==oggi.getFullYear()) {
      return true;
    }
  }
}

function iconaGiornoDiVacanza(oggi) {
  for(var i=0; i<giorniDiVacanza.length; i++) {
    if(giorniDiVacanza[i][0]==oggi.getDate() && giorniDiVacanza[i][1]==oggi.getMonth() && giorniDiVacanza[i][2]==oggi.getFullYear()) {
      return giorniDiVacanza[i][4];
    }
  }
}

function testoGiornoDiVacanza(oggi) {
  for(var i=0; i<giorniDiVacanza.length; i++) {
    if(giorniDiVacanza[i][0]==oggi.getDate() && giorniDiVacanza[i][1]==oggi.getMonth() && giorniDiVacanza[i][2]==oggi.getFullYear()) {
      return giorniDiVacanza[i][3];
    }
  }
}

function riempiTabella(i) {
  //
  document.getElementById("giorno").innerHTML=orario[i][0];

  //
  for(var j=1; j<9; j++) {
    document.getElementById("materia-"+j).innerHTML=orario[i][j];
  }
}

function evidenziaMateriaAttuale(i, totaleMinuti) {
  if(totaleMinuti>=480 && totaleMinuti<530) {
    document.getElementById("riga-1").style.backgroundColor="lightgrey";
    document.getElementById("riga-1").style.fontWeight="bold";
  } else if(totaleMinuti>=530 && totaleMinuti<580) {
    document.getElementById("riga-2").style.backgroundColor="lightgrey";
    document.getElementById("riga-2").style.fontWeight="bold";
  } else if(totaleMinuti>=580 && totaleMinuti<630) {
    document.getElementById("riga-3").style.backgroundColor="lightgrey";
    document.getElementById("riga-3").style.fontWeight="bold";
  } else if(totaleMinuti>=630 && totaleMinuti<680) {
    document.getElementById("riga-4").style.backgroundColor="lightgrey";
    document.getElementById("riga-4").style.fontWeight="bold";
  } else if(totaleMinuti>=680 && totaleMinuti<730) {
    document.getElementById("riga-5").style.backgroundColor="lightgrey";
    document.getElementById("riga-5").style.fontWeight="bold";
  } else if(totaleMinuti>=730 && totaleMinuti<780) {
    document.getElementById("riga-6").style.backgroundColor="lightgrey";
    document.getElementById("riga-6").style.fontWeight="bold";
  } else if(totaleMinuti>=940 && totaleMinuti<990) {
    document.getElementById("riga-7").style.backgroundColor="lightgrey";
    document.getElementById("riga-7").style.fontWeight="bold";
  } else if(totaleMinuti>=990 && totaleMinuti<1040) {
    document.getElementById("riga-8").style.backgroundColor="lightgrey";
    document.getElementById("riga-8").style.fontWeight="bold";
  }
}

function materiaAttuale(i, totaleMinuti) {
  if(totaleMinuti>=480 && totaleMinuti<530) {
    return orario[i][1];
  } else if(totaleMinuti>=530 && totaleMinuti<580) {
    return orario[i][2];
  } else if(totaleMinuti>=580 && totaleMinuti<630) {
    return orario[i][3];
  } else if(totaleMinuti>=630 && totaleMinuti<680) {
    return orario[i][4];
  } else if(totaleMinuti>=680 && totaleMinuti<730) {
    return orario[i][5];
  } else if(totaleMinuti>=730 && totaleMinuti<780) {
    return orario[i][6];
  } else if(totaleMinuti>=940 && totaleMinuti<990) {
    return orario[i][7];
  } else if(totaleMinuti>=990 && totaleMinuti<1040) {
    return orario[i][8];
  }
}

function minutiRimanenti(totaleMinuti) {
  if(totaleMinuti>=480 && totaleMinuti<530) {
    return 530-totaleMinuti;
  } else if(totaleMinuti>=530 && totaleMinuti<580) {
    return 580-totaleMinuti;
  } else if(totaleMinuti>=580 && totaleMinuti<630) {
    return 630-totaleMinuti;
  } else if(totaleMinuti>=630 && totaleMinuti<680) {
    return 680-totaleMinuti;
  } else if(totaleMinuti>=680 && totaleMinuti<730) {
    return 730-totaleMinuti;
  } else if(totaleMinuti>=730 && totaleMinuti<780) {
    return 780-totaleMinuti;
  } else if(totaleMinuti>=940 && totaleMinuti<990) {
    return 990-totaleMinuti;
  } else if(totaleMinuti>=990 && totaleMinuti<1040) {
    return 1040-totaleMinuti;
  }
}

function materiaSuccessiva(i, totaleMinuti) {
  if(totaleMinuti>=480 && totaleMinuti<530) {
    var materiaSuccessiva=orario[i][2];
  } else if(totaleMinuti>=530 && totaleMinuti<580) {
    var materiaSuccessiva=orario[i][3];
  } else if(totaleMinuti>=580 && totaleMinuti<630) {
    var materiaSuccessiva=orario[i][4];
  } else if(totaleMinuti>=630 && totaleMinuti<680) {
    var materiaSuccessiva=orario[i][5];
  } else if(totaleMinuti>=680 && totaleMinuti<730) {
    var materiaSuccessiva=orario[i][6];
  } else if(totaleMinuti>=730 && totaleMinuti<780) {
    var materiaSuccessiva=orario[i][7];
  } else if(totaleMinuti>=940 && totaleMinuti<990) {
    var materiaSuccessiva=orario[i][8];
  } else if(totaleMinuti>=990 && totaleMinuti<1040) {
    var materiaSuccessiva=null;
  }

  //
  if(materiaSuccessiva!=null) {
    return materiaSuccessiva;
  } else {
    return "---";
  }
}

function aggiusta(valore) {
	if(valore<10) {
		return "0"+valore;
	} else {
		return valore;
	}
}
