
    window.leftTab = function (newTab, tabId, isRight) {
        const leftTab = document.getElementById('left_space');
        
        if (leftTab.style.visibility === 'hidden' || leftTab.style.visibility === '') {
          leftTab.style.visibility = 'visible'; // or 'table' for the table specifically
          leftTab.style.display = 'block';
          leftTab.style.width = '22vw';
          window.changeTab(newTab, tabId, isRight);
      } else if (newTab != window.statusTab) {
        leftTab.style.visibility = 'visible'; // or 'table' for the table specifically
          leftTab.style.width = '22vw';
          window.changeTab(newTab, tabId, isRight);
      } else { 
            leftTab.style.visibility = 'hidden';
            leftTab.style.display = 'none';
            leftTab.style.width = '0vw';        
        }
    }

    window.rightTab = function (newTab, tabId, isRight) {
        const rightTab = document.getElementById('right_space');
        
        if (rightTab.style.visibility === 'hidden' || rightTab.style.visibility === '') {
          rightTab.style.visibility = 'visible'; // or 'table' for the table specifically
          rightTab.style.display = 'block';
          rightTab.style.width = '22vw';
          window.changeTab(newTab, tabId, isRight);
      } else if (newTab != window.statusTabRight) {
          window.changeTab(newTab, tabId, isRight);
      } else { 
            rightTab.style.visibility = 'hidden';
            rightTab.style.display = 'none';
            rightTab.style.width = '0vw';
        }
    }