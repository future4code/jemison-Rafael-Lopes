const operation = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

const calculate = () =>{
switch(operation){
    case "add":
      return n1 + n2;
    break;
    case "sub":
      return n1 - n2;
    break;
    case "mult":
      return n1 * n2;
    break;
    case "div":
      return n1 / n2;
     break;
    default:
      return "Algo deu errado. Digite números válidos."
    break;
}
}
console.log(calculate())