const team =[{"name": "Van", "role": "Backend"},
{"name": "Dave", "role": "Fontend"},
{"name": "Tatiana ", "role": "Fontend"},
{"name": "Elvis", "role": "Fontend"},
{"name": "Tramg", "role": "Fontend"},
{"name": "Ryan", "role": "Interface"},
{"name": "Zach", "role": "Inertface"},]

let role = [];
team.map(team => role.push( `${team.role}`));
console.log(role);

