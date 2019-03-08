var LocalStorageUtil = {
    append(item, value) {
        var date = new Date();

        var detailValue = date.getDay() + "." + date.getMonth() + "." + date.getFullYear() + " / " + (date.getUTCHours()+2) + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + " - " + value;

        var newValue;
        
        if(localStorage.getItem(item) == null) {
            newValue = detailValue;
        } else {
            newValue = localStorage.getItem(item) + "," + detailValue;
        }

        localStorage.setItem(item, newValue);
    },

    print(item, div) {
        var subItems =  localStorage.getItem(item).split(",");
        for(var i=0; i< subItems.length; i++) {
            div.innerHTML += subItems[i] + "<br>";
        }
    },

    clear(item) {
        localStorage.removeItem(item);
        location.reload();
    }
};