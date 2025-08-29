function setInnerText(id,value){
    const cardCount= document.getElementById(id).innerText =value;
    return cardCount
}

function totleCost(id,value){
      const totleCost = document.getElementById(id).innerText;
        const newTotleCost = parseFloat(totleCost);
        // ==============
        const sum =newTotleCost + parseFloat(value);
        const functionText= setInnerText(id,sum)
        return functionText
}
