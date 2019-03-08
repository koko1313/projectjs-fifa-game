Ajax.get("https://worldcup.sfg.io/teams/", (countryList) => {
    for(var i=0; i<countryList.length; i++) {
        console.log(countryList[i].country + " " + countryList[i].fifa_code);
    }
});

Ajax.get("https://worldcup.sfg.io/teams/group_results", (groups) => {
    for(var i=0; i<groups.length; i++) {
        console.log(groups[i].id + " " + groups[i].letter);

        for(var j=0; j<groups[i].ordered_teams.length; j++) {
            console.log("- " + groups[i].ordered_teams[j].country + " " + groups[i].ordered_teams[j].fifa_code);
        }
    }
});

Ajax.get("https://worldcup.sfg.io/matches/country?fifa_code=ARG", (countryList) => {
    //console.log(countryList);

    for(var i=0; i<countryList.length; i++) {
        console.log(countryList[i].away_team_country);
        console.log(countryList[i].weather.description + " " + countryList[i].weather.humidity + " " + countryList[i].weather.temp_celsius + " " + countryList[i].weather.wind_speed);

        var playersList = countryList[i].officials;
        for(var j=0; j<playersList.length; j++) {
            console.log("- " + playersList[j]);
        }
    }
});

Ajax.get("https://worldcup.sfg.io/teams/group_results", (groupResultsList) => {
    //console.log(groupResultsList);

    for(var i=0; i<groupResultsList.length; i++) {
        for(var j=0; j<groupResultsList[i].ordered_teams.length; j++) {
            console.log(groupResultsList[i].ordered_teams[j].country + " " + groupResultsList[i].ordered_teams[j].draws + " " + groupResultsList[i].ordered_teams[j].goal_differential);
        }
    }
});