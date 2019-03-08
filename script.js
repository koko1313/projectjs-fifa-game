var getCountries = function() {
    LocalStorageUtil.append("history", "View countries");

    Ajax.get("https://worldcup.sfg.io/teams/", (countryList) => {
        var table = document.getElementById("countriesTable");

        for(var i=0; i<countryList.length; i++) {
            var tr = table.appendChild(document.createElement("tr"));
            
            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(countryList[i].fifa_code));

            var td = tr.appendChild(document.createElement("td"));

            var a = td.appendChild(document.createElement("a"));
            a.setAttribute("href", "countryInformation.html?fifa_code="+countryList[i].fifa_code);

            a.appendChild(document.createTextNode(countryList[i].country));
        }
    });
};

var getGroups = function() {
    LocalStorageUtil.append("history", "View groups");

    Ajax.get("https://worldcup.sfg.io/teams/group_results", (groups) => {
        var table = document.getElementById("groupsTable");

        for(var i=0; i<groups.length; i++) {
            var tr = table.appendChild(document.createElement("tr"));

            var td = tr.appendChild(document.createElement("td"));

            td.appendChild(document.createTextNode("Group " + groups[i].id + ": " + groups[i].letter));

            for(var j=0; j<groups[i].ordered_teams.length; j++) {
                var ul = td.appendChild(document.createElement("ul"));
                var li = ul.appendChild(document.createElement("li"));
                li.appendChild(document.createTextNode(groups[i].ordered_teams[j].fifa_code + " - " + groups[i].ordered_teams[j].country));
            }
        }
    });
};

var getMatches = function() {
    LocalStorageUtil.append("history", "View matches");

    Ajax.get("https://worldcup.sfg.io/matches", (matches) => {
        var table = document.getElementById("matchesTable");

        for(var i=0; i<matches.length; i++) {
            var tr = table.appendChild(document.createElement("tr"));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].away_team.code));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].away_team.country));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].home_team.code));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].home_team.country));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].location));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].venue));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(matches[i].winner));
        }
    });
};

var getCountryInformation = function() {
    LocalStorageUtil.append("history", "View country information");

    var url = new URL(document.location.href);
    var fifa_code = url.searchParams.get("fifa_code");

    Ajax.get("https://worldcup.sfg.io/matches/country?fifa_code="+fifa_code, (countryList) => {
        var table = document.getElementById("countryInformationTable");

        for(var i=0; i<countryList.length; i++) {
            var tr = table.appendChild(document.createElement("tr"));

            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(countryList[i].away_team_country));
            
            var td = tr.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(countryList[i].weather.description + ", humidity: " + countryList[i].weather.humidity + ", temp celsius: " + countryList[i].weather.temp_celsius + ", wind speed: " + countryList[i].weather.wind_speed));

            var td = tr.appendChild(document.createElement("td"));

            var ul = td.appendChild(document.createElement("ul"));

            var playersList = countryList[i].officials;
            for(var j=0; j<playersList.length; j++) {
                var li = ul.appendChild(document.createElement("li"));
                li.appendChild(document.createTextNode(playersList[j]));
            }
        }
    });
};

var printHistory = function() {
    LocalStorageUtil.append("history", "View history");

    var div = document.getElementById("history");
    LocalStorageUtil.print("history", div);
};