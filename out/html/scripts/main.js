// Contains functions for main.scene


  window.mapadd = function() {
      $('#map').empty();
      var scene = dendryUI.game.scenes[window.map];
      dendryUI.dendryEngine._runActions(scene.onArrival);
      var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
      $('#map').append(dendryUI.contentToHTML.convert(displayContent));
  };

  window.mapremove = function() {
      $('#map').empty();
      var scene = dendryUI.game.scenes[window.nothing];
      dendryUI.dendryEngine._runActions(scene.onArrival);
      var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
      $('#map').append(dendryUI.contentToHTML.convert(displayContent));
  };

    svgzoom = function() {
       var nodes = document.getElementById('svg1');

       nodes.panZoom();
    }


        window.deckchange = function (deckchange, area) {
            var decks = document.querySelector(deckchange)
            console.log("deckchange")
            $(decks).detach().appendTo(area)
        }

        window.deckchanges = function (deckchange, area) {
            setTimeout(() => {
                                window.mainwindow();
            }, 0.1);
        }
        
        let onmainwindow = 0;

    window.establishmain = function () {
            document.getElementById('body').addEventListener("mouseover", window.mainwindow());
    }
        
    window.preparemainwindow = function () {
        var mainarea = document.getElementById('maingamearea');
        
        mainarea.style.display = 'none';
    }

    window.mainwindow = function () {
        if ((window.dendryUI.dendryEngine.state.sceneId.startsWith('main'))) {
            window.mapadd();

            var mapwindow = document.getElementById('map');
            var cardwrapper = document.getElementById('cardwrapper');
            var handwrapper = document.getElementById('handholder');
            var mainscene = document.getElementById('mainwrapper');
            var mainarea = document.getElementById('maingamearea');
            var wrapper1 = document.getElementById('right_tools_wrapper');
            var wrapper2 = document.getElementById('left_tools_wrapper');
            var mainfeatures = document.getElementById('mainwindowcontainer');

            mapwindow.style.display = 'block';
            cardwrapper.style.display = 'flex';
            mainscene.style.display = 'none';
            mainarea.style.display = 'block';
            handwrapper.style.display = 'block';
            mainfeatures.style.display = 'block';

            mainarea.style.width = '50vw';
            mainarea.style.padding = '0.1em';
            wrapper1.style.width = '25vw';
            wrapper2.style.width = '25vw';

            deckchange('.decks', '#deckholder');
            deckchange('.hand', '#handholder');
            deckchange('.pinned-cards', '#advisor-div');

            svgPanZoom('#svg1', {
                zoomScaleSensitivity: 0.2
                , minZoom: 1
                , maxZoom: 10
                , contain: true
            });;

            console.log("finished");

        }
    }