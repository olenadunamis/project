let cache =  new WeakMap();
function cahcheUser(user)
{
    if(!cache.has(user))
    {
        cache.set(user,Date.now());
    }
    return cache.get(user);
}

let Lena = {name: 'Elena'};
let Alex =  {name:'Alexandr'};

cahcheUser(Lena);
cahcheUser(Alex);

Lena =null;
console.log(cache.has(Lena));
console.log(cache.has(Alex));

let games = [
{name:'Dota 2', year: 2001},
{name:'CS GO', year: 2009},
{name:'Fortnite', year: 2017}
]; 

let infoGames = new WeakSet();

infoGames.add(games[0]);
infoGames.add(games[1]);


console.log(infoGames.has(games[0]));