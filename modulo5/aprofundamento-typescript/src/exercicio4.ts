// a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários para responder as questões.
// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// Resposta: Por meio de um script que transpile o código font (TS), convertendo-o em código de produção na pasta build. 
// Ex: "start": "tsc && node ./build/index.js"

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
// Resposta: O arquivo foi criado na pasta src e está sendo transpilado por meio do seguinte processo:
// 1 - Criado script no package.json: "exercicio4": "echo Transpilando... && tsc && echo Rodando... && node ./build/exercicio4.js",
// 2 - Dar o comando no bash:  npm run exercicio3 build/exercicio3.js.