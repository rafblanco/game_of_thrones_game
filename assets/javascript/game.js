//$(document).ready(function() {
    var players = {
        "John Snow": {
            healthpower: 90,
            attackpower: 10,
            counterattack: 15
        },
        "Kingslayer": {
            healthpower: 120,
            attackpower: 12,
            counterattack: 18
        },
        "The Hound": {
            healthpower: 130,
            attackpower: 15,
            counterattack: 20
        },
        "Oberyn": {
            healthpower: 75,
            attackpower: 8,
            counterattack: 10
        }
    };

    // var count;
    // var yourHP = $("#your-character").attr(players[count].healthpower);
    // var yourAP = 0;
    // var defenderHP = 0;

    var firstCharacter = false;
    var secondCharacter = false;

    // Give each player their attributes
    function johnSnow() {
            $("#john-snow").attr("data-fightstats", players["John Snow"].healthpower);
    };


    $(".fighter").on("click", function () {
        if (firstCharacter === false) {
            firstCharacter = true;
            $("#your-character").append(this);
            $("#enemies").append($("#starting-section"));
        } else {
            secondCharacter = true;
            $("#defender").append(this);
        }
        if (firstCharacter === true && secondCharacter === true) {
            return false;
        }
    });

    $("#attack-button").on("click", function () {
        if (firstCharacter === true && secondCharacter === true) {
            // Your character attacks defender and 
        }
    });
johnSnow();
//});