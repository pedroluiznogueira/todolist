import { Injectable } from '@angular/core';
import { Prioridade } from '../models/Prioridade';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  listaTarefas: Tarefa[] = [
    { texto: "Estudar pela manhã", feita: false, prioridade: Prioridade.alta },
    { texto: "Estudar pela tarde", feita: true, prioridade: Prioridade.baixa }
  ]

  constructor() { }

  getListaTarefas(): Tarefa[] {
    return this.listaTarefas;
  }

  addTarefa(tarefa: Tarefa): void {
    this.listaTarefas.push(tarefa);
  }
}
