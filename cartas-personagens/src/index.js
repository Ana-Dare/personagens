import { Personagem } from "./modules/personagem.js"
import { personagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoRodrigo = new ArqueiroMago('Rodrigo', 7, 6)
const guerreiroJorge = new Guerreiro('Jorge', 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoRodrigo, guerreiroJorge]

new personagemView(personagens).render()