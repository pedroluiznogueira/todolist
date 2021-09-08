import { Injectable } from '@angular/core';
import { Prioridade } from '../models/Prioridade';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  listaTarefas: Tarefa[] = []

  constructor() { }

  getListaTarefas(): Tarefa[] {
    return this.listaTarefas;
  }

  addTarefa(tarefa: Tarefa): void {
    this.listaTarefas.push(tarefa);
  }
}
