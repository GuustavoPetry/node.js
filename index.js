import PromptSync from "prompt-sync"; // importando pacote prompt-sync
import chalk from "chalk"; // importando pacote chalk
const prompt = PromptSync();

let nome = prompt("Informe seu nome: ");
console.log(chalk.green(`Seja bem-vindo ${nome}`));