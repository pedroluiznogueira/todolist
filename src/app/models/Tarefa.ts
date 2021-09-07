import { Prioridade } from "./Prioridade";

export interface Tarefa {
    texto: string;
    feita: boolean;
    prioridade: Prioridade; 
}