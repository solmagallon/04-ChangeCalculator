function log() {
    var money = [
        {name: "dollar" , value: 100, change: 0},
        {name: "quarter" , value: 25, change: 0},
        {name: "dime" , value: 10, change: 0},
        {name: "nickel" , value: 5, change: 0},
        {name: "penny" , value: 1, change: 0}
    ];

    var due = document.getElementById('cost').value;
    var given = document.getElementById('payment').value;
    var changeDue = (given - due) * 100;

    for (i = 0; i < money.length; i ++) {
        money[i].change = Math.floor(changeDue/money[i].value);
        changeDue = changeDue - (money[i].change * money[i].value);
        var outputHTML = money[i].change + " " + money[i].name;
        $("#output").empty().append();

        console.log(money[i]);
    }
    $("#dollar").empty();
    $("#dollar").append(money[0].change);
    
    $("#quarter").empty();
    $("#quarter").append(money[1].change);
    
    $("#dime").empty();
    $("#dime").append(money[2].change);
    
    $("#nickle").empty();
    $("#nickle").append(money[3].change);
    
    $("#penny").empty();
    $("#penny").append(money[4].change);
}