export default async function getCard() {
    const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  
    return cardsData.json()
  
  }