$(document).ready(function() {
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


    // just add the attack power to the your character and to the enemies 
    // var count;
    var yourCharacter = "";
    var enemy = "";
    // var yourAP = 0;
    // var defenderHP = 0;

    var firstCharacter = false;
    var secondCharacter = false;

    // Give each player their attributes
    // $.each(players, function() {
    //     $.each(this, function(index, healthpower){
    //         console.log(healthpower)
    //     });
    //         //$("#" + index).html(index[healthpower]);
    //         //console.log( healthpower);
    //         //console.log("------")
    //         //console.log(players["jonsnow"].healthpower)
    // });
    $("#jonsnow .health").html(players["jonsnow"].healthpower);
    $("#kingslayer .health").html(players["kingslayer"].healthpower);
    $("#thehound .health").html(players["thehound"].healthpower);
    $("#oberyn .health").html(players["oberyn"].healthpower);


    $(".fighter").on("click", function () {
        if (firstCharacter === false) {
            firstCharacter = true;
            $("#your-character").append(this);
            yourCharacter = this.id;
            $("#enemies").append($("#starting-section"));
            $("#starting-section > div").css({"background-color": "red", "border": "1px solid black"});
        } else {
            secondCharacter = true;
            $("#defender").append(this);
            enemy = this.id;
        }
        if (firstCharacter === true && secondCharacter === true) {
            return false;
        }
    });

    $("#attack-button").on("click", function () {
        if (firstCharacter === true && secondCharacter === true) {
            // Your character attacks defender and displays it
            players[enemy].healthpower -= players[yourCharacter].attackpower;
            $("#"+enemy).find(".health").html(players[enemy].healthpower);
            $("#your-attack").html("You have attacked " + enemy + " for " + players[yourCharacter].attackpower + " damage.");

            // Enemy counterattacks back and displays it
            players[yourCharacter].healthpower -= players[enemy].counterattack;
            $("#"+ yourCharacter).find(".health").html(players[yourCharacter].healthpower);
            $("#enemy-attack").html(enemy + " attacked you back for " + players[enemy].counterattack + " damage.");
            // Your attack goes up by the base attack
            players[yourCharacter].attackpower += players[yourCharacter].baseattack;
        }
        if (players[enemy].healthpower <= 0) {
            secondCharacter = false;
            enemy = "";
            $("#defender").html("");
            $("#display").html("You have defeated " + enemy);
        } 
        if (players[yourCharacter].healthpower <= 0){
            $("#your-character").html("");
            $("#display").html("You have brought a great deal of shame to the " + players[yourCharacter].family);

        }
    });
});