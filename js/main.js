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

function paginaCaricata() {
  //
  var oggi=new Date(2020, 11, 23, 10, 25);

  //
  var totaleMinuti=oggi.getHours()*60+oggi.getMinutes();

  //
  orarioOdierno(oggi.getDay(), totaleMinuti);
}

function orarioOdierno(i, totaleMinuti) {
  if(i!=0 && totaleMinuti<480) {
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
  } else if(i==0) {
    //
    document.getElementById("tabella").remove();

    //
    var image=document.createElement("img");
    image.setAttribute("src", "img/school-closed.jpg");
    image.setAttribute("alt", "scuola chiusa");
    image.setAttribute("class", "img-fluid");
    document.getElementById("info").appendChild(image);
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
