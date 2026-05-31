


gothamGazetteSwitch = function () {
    const mainthought = document.getElementById("mainthought");
    const gazetteNews = document.getElementById("gothamgazette");
    const planetNews = document.getElementById("dailyplanet");
    const starNews = document.getElementById("gothamstar");

    if (mainthought.style.display === 'none' && starNews.style.display === 'block' || planetNews.style.display === 'block') {
        gazetteNews.style.display = 'block';
    } else if (mainthought.style.display == 'none' && gazetteNews.style.display == 'block') {
        mainthought.style.display = 'block';
        gazetteNews.style.display = 'none';
    } else {
        mainthought.style.display = 'none';
        gazetteNews.style.display = 'block';
    }

    if (planetNews.style.display == 'block') {
        planetNews.style.display = 'none';
    }

    if (starNews.style.display == 'block') {
        starNews.style.display = 'none';
    }

}

dailyPlanetSwitch = function () {
    const mainthought = document.getElementById("mainthought");
    const gazetteNews = document.getElementById("gothamgazette");
    const planetNews = document.getElementById("dailyplanet");
    const starNews = document.getElementById("gothamstar");

    if (mainthought.style.display === 'none' && starNews.style.display === 'block' || gazetteNews.style.display === 'block') {
        planetNews.style.display = 'block';
    } else if (mainthought.style.display == 'none' && planetNews.style.display == 'block') {
        mainthought.style.display = 'block';
        planetNews.style.display = 'none';
    } else {
        mainthought.style.display = 'none';
        planetNews.style.display = 'block';
    }

    if (gazetteNews.style.display == 'block') {
        gazetteNews.style.display = 'none';
    }

    if (starNews.style.display == 'block') {
        starNews.style.display = 'none';
    }
}

gothamStarSwitch = function () {
    const mainthought = document.getElementById("mainthought");
    const gazetteNews = document.getElementById("gothamgazette");
    const planetNews = document.getElementById("dailyplanet");
    const starNews = document.getElementById("gothamstar");

    if (mainthought.style.display === 'none' && gazetteNews.style.display === 'block' || planetNews.style.display === 'block') {
        starNews.style.display = 'block';
    } else if (mainthought.style.display == 'none' && starNews.style.display == 'block') {
        mainthought.style.display = 'block';
        starNews.style.display = 'none';
    } else {
        mainthought.style.display = 'none';
        starNews.style.display = 'block';
    }

    if (planetNews.style.display == 'block') {
        planetNews.style.display = 'none';
    }

    if (gazetteNews.style.display == 'block') {
        gazetteNews.style.display = 'none';
    }
}