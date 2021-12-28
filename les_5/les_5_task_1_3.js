let chess_cl = document.querySelector(".chess_cl");
chess_cl.style.background = "white";
chess_cl.style.width = "550px";
chess_cl.style.height = "550px";
chess_cl.style.paddingLeft = "50px";
chess_cl.style.paddingBottom = "50px";
chess_cl.style.margin = "0 auto";
chess_cl.style.display = "flex";
chess_cl.style.flexWrap = "wrap";

function generate_chess() {
    let field = document.createElement("div");
    field.className = "field";
    chess_id.append(field);
    field.style.width = "50px";
    field.style.height = "50px";
    field.style.margin = "0px";
    field.style.padding = "0px";
    field.style.fontSize = "40px";
    field.style.fontWeight = "bold";
    field.style.textAlign = "center";

}
window.onload = generate_chess;

for (let n = 0; (n != 121); n++) {
    window.onload = generate_chess();
};

let m_field = document.querySelectorAll(".field");
for (let i = 0; (i < m_field.length); i++) {
    let c;
    if (i % 2 == 0) {
        c = "dimgrey";
    } else {
        c = "bisque";
    }
    m_field[i].style.background = c;
    if ((i > 33) && (i < 42)) {
        m_field[i].innerText = "п";
    };
    if ((i > 88) && (i < 97)) {
        m_field[i].innerText = "п";
    };

    m_field[23].innerText = "Л";
    m_field[24].innerText = "К";
    m_field[25].innerText = "С";
    m_field[26].innerText = "Ф";
    m_field[27].innerText = "Кр";
    m_field[28].innerText = "С";
    m_field[29].innerText = "К";
    m_field[30].innerText = "Л";

    m_field[100].innerText = "Л";
    m_field[101].innerText = "К";
    m_field[102].innerText = "С";
    m_field[103].innerText = "Ф";
    m_field[104].innerText = "Кр";
    m_field[105].innerText = "С";
    m_field[106].innerText = "К";
    m_field[107].innerText = "Л";

    for (let f = 89; (f < 108); f++) {
        m_field[f].style.color = "white";
    }
    for (let f = 0; (f <= 22); f++) {
        m_field[f].style.background = "white";
    }

    for (let f = 110; (f < 121); f++) {
        m_field[f].style.background = "white";
    }

    for (let f of [31, 32, 33, 42, 43, 44, 53, 54, 55, 64, 65, 66, 75, 76, 77, 86, 87, 88, 97, 98, 99, 108, 109]) {
        m_field[f].style.background = "white";
    }

    m_field[12].innerText = "A";
    m_field[13].innerText = "B";
    m_field[14].innerText = "C";
    m_field[15].innerText = "D";
    m_field[16].innerText = "E";
    m_field[17].innerText = "F";
    m_field[18].innerText = "G";
    m_field[19].innerText = "H";
    m_field[111].innerText = "A";
    m_field[112].innerText = "B";
    m_field[113].innerText = "C";
    m_field[114].innerText = "D";
    m_field[115].innerText = "E";
    m_field[116].innerText = "F";
    m_field[117].innerText = "G";
    m_field[118].innerText = "H";

    m_field[97].style.color = "black";
    m_field[99].style.color = "black";

    m_field[22].innerText = "1";
    m_field[33].innerText = "2";
    m_field[44].innerText = "3";
    m_field[55].innerText = "4";
    m_field[66].innerText = "5";
    m_field[77].innerText = "6";
    m_field[88].innerText = "7";
    m_field[99].innerText = "8";
    m_field[31].innerText = "1";
    m_field[42].innerText = "2";
    m_field[53].innerText = "3";
    m_field[64].innerText = "4";
    m_field[75].innerText = "5";
    m_field[86].innerText = "6";
    m_field[97].innerText = "7";
    m_field[108].innerText = "8";
}
