$(document).ready(function () {
    var players = {
        "jonsnow": {
            healthpower: 100,
            attackpower: 10,
            baseattack: 10,
            counterattack: 15,
            family: "Starks"
        },
        "kingslayer": {
            healthpower: 120,
            attackpower: 13,
            baseattack: 13,
            counterattack: 16,
            family: "Lannisters"
        },
        "thehound": {
            healthpower: 130,
            attackpower: 15,
            baseattack: 15,
            counterattack: 18,
            family: "Brotherhood"
        },
        "oberyn": {
            healthpower: 85,
            attackpower: 10,
            baseattack: 10,
            counterattack: 10,
            family: "Martells"
        }
    };

    //Global variables
    var yourCharacter = "";
    var enemy = "";

    var firstCharacter = false;
    var secondCharacter = false;

    // Give each player their health attributes
    $("#jonsnow .health").html(players["jonsnow"].healthpower);
    $("#kingslayer .health").html(players["kingslayer"].healthpower);
    $("#thehound .health").html(players["thehound"].healthpower);
    $("#oberyn .health").html(players["oberyn"].healthpower);


    // Fighters
    $(".fighter").on("click", function () {
        if (firstCharacter === true && secondCharacter === true) {
            return false;
        } else {
            if (firstCharacter === false) {
                firstCharacter = true;
                $("#your-character").append(this);
                yourCharacter = this.id;
                $("#enemies").append($("#starting-section"));
                $("#starting-section > div").css({ "background-color": "red", "border": "1px solid black" });
            } else {
                secondCharacter = true;
                $("#defender").append(this);
                enemy = this.id;
            }
        }
    });

    // Attack Button
    $("#attack-button").on("click", function () {
        if (firstCharacter === true && secondCharacter === true) {
            $("#display").html("")
            // Your character attacks defender and displays it
            players[enemy].healthpower -= players[yourCharacter].attackpower;
            $("#" + enemy).find(".health").html(players[enemy].healthpower);
            $("#your-attack").html("You have attacked " + enemy + " for " + players[yourCharacter].attackpower + " damage.");

            // Enemy counterattacks back and displays it
            players[yourCharacter].healthpower -= players[enemy].counterattack;
            $("#" + yourCharacter).find(".health").html(players[yourCharacter].healthpower);
            $("#enemy-attack").html(enemy + " attacked you back for " + players[enemy].counterattack + " damage.");
            // Your attack goes up by the base attack
            players[yourCharacter].attackpower += players[yourCharacter].baseattack;
        }
        if (players[enemy].healthpower <= 0) {
            secondCharacter = false;
            $("#defender").html("");
            $("#display").html("You have defeated " + enemy);
            enemy = "";
        }
        if (players[yourCharacter].healthpower <= 0) {
            $("#your-character").html("");
            $("#loss-display").html("You have brought a great deal of shame to the " + players[yourCharacter].family).css("color", "white");
        
            $("<section>").hide();
            $("#attack-button").on("click", function(){
                return false;
            })
        }
    });
});