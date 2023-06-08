
export default async function getData(){

    const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G');
  
    return exploreData.json() 
    
  }
