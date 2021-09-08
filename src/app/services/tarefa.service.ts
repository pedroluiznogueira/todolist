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

  removerTarefa(tarefa: Tarefa): void {
    console.log(this.listaTarefas.length);
    this.listaTarefas.splice(this.listaTarefas.indexOf(tarefa), 1);
    console.log(this.listaTarefas.length);
  }
}
