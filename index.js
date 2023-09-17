const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
  }

  const newHeader = document.createElement("h1");
  newHeader.id = 'victory';
  newHeader.textContent = Keter + " is the champion";
  document.body.appendChild(newHeader);

  const nwHeader = document.createElement('h1');
  nwHeader.id = 'victory';
  const yourName = 'Keter'; 
  nwHeader.textContent = `${yourName} is the champion`;
        
  



    
    
    