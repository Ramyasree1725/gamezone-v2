export const genres = ["All", "Action", "Adventure", "RPG", "Racing", "Sports", "Strategy", "FPS", "Puzzle"];
export const platforms = ["All", "PC", "PlayStation", "Xbox", "Nintendo", "Mobile"];

export const seedGames = [
  {id:1,title:"Shadow Protocol",genre:"FPS",platform:"PC",rating:4.9,players:"2.4M",price:"Free",emoji:"🎯",description:"Competitive tactical shooter with ranked arenas and team missions."},
  {id:2,title:"Neon Drift",genre:"Racing",platform:"PlayStation",rating:4.8,players:"1.8M",price:"$29.99",emoji:"🏎️",description:"High-speed futuristic racing across neon cities."},
  {id:3,title:"Kingdoms Reborn",genre:"Strategy",platform:"PC",rating:4.7,players:"980K",price:"$39.99",emoji:"🏰",description:"Build kingdoms, manage resources and command armies."},
  {id:4,title:"Mystic Realms",genre:"RPG",platform:"Xbox",rating:4.9,players:"3.1M",price:"$49.99",emoji:"🧙",description:"Explore a magical open world filled with quests and bosses."},
  {id:5,title:"Galaxy Raiders",genre:"Action",platform:"PC",rating:4.6,players:"1.2M",price:"Free",emoji:"🚀",description:"Fast space combat with co-op missions and ranked battles."},
  {id:6,title:"Pixel Quest",genre:"Adventure",platform:"Nintendo",rating:4.5,players:"640K",price:"$19.99",emoji:"🗺️",description:"Retro-inspired adventure with puzzles and hidden worlds."},
  {id:7,title:"Street Champions",genre:"Sports",platform:"PlayStation",rating:4.7,players:"1.5M",price:"$34.99",emoji:"⚽",description:"Arcade football with clubs, leagues and online matches."},
  {id:8,title:"Cyber Arena",genre:"FPS",platform:"Xbox",rating:4.8,players:"2.0M",price:"Free",emoji:"🤖",description:"Cyberpunk arena shooter with hero abilities."},
  {id:9,title:"Dragon Empire",genre:"RPG",platform:"PC",rating:4.8,players:"2.7M",price:"$44.99",emoji:"🐉",description:"Train dragons and defend an ancient fantasy empire."},
  {id:10,title:"Puzzle Nexus",genre:"Puzzle",platform:"Mobile",rating:4.4,players:"890K",price:"Free",emoji:"🧩",description:"Challenging puzzle stages with daily challenges."},
  {id:11,title:"Apex Legends Arena",genre:"FPS",platform:"PC",rating:4.7,players:"5.1M",price:"Free",emoji:"🔫",description:"Battle royale with unique legends and ranked seasons."},
  {id:12,title:"Speed Horizon",genre:"Racing",platform:"Xbox",rating:4.6,players:"1.1M",price:"$39.99",emoji:"🏁",description:"Open world racing with custom cars and multiplayer."},
];

export const seedTournaments = [
  {id:1,name:"GameZone Championship",game:"Shadow Protocol",prize:"$10,000",date:"Sep 12, 2026",teams:64,status:"Open"},
  {id:2,name:"Neon Drift Cup",game:"Neon Drift",prize:"$5,000",date:"Sep 18, 2026",teams:32,status:"Open"},
  {id:3,name:"Kingdom Masters",game:"Kingdoms Reborn",prize:"$3,500",date:"Sep 22, 2026",teams:16,status:"Open"},
  {id:4,name:"Galaxy Raiders Clash",game:"Galaxy Raiders",prize:"$2,500",date:"Oct 02, 2026",teams:32,status:"Upcoming"},
];

export const leaderboard = [
  {rank:1,name:"NovaX",score:9820,badge:"🏆"},
  {rank:2,name:"ShadowFox",score:9410,badge:"🥈"},
  {rank:3,name:"PixelKing",score:9180,badge:"🥉"},
  {rank:4,name:"CyberAce",score:8870,badge:"⭐"},
  {rank:5,name:"DragonByte",score:8640,badge:"⭐"},
];

export const newsItems = [
  {id:1,title:"Season 5 Launch",summary:"New ranked season with exclusive rewards.",date:"2 days ago",emoji:"📢"},
  {id:2,title:"Tournament Guide",summary:"Everything players need to know before joining.",date:"4 days ago",emoji:"📘"},
];

export const achievements = [
  {id:1,name:"First Victory",desc:"Win your first match",emoji:"🏆",unlocked:true},
  {id:2,name:"Explorer",desc:"Play 5 different games",emoji:"🧭",unlocked:true},
  {id:3,name:"Champion",desc:"Win a tournament",emoji:"👑",unlocked:false},
];
