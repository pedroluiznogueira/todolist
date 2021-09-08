import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';
import * as uniqid from 'uniqid';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Output() removerTarefaClick: EventEmitter<Tarefa> = new EventEmitter();

  // array para receber a lista de tarefas do serviço
  tarefas!: Tarefa[];

  // injetando o serviço
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    // boa prática 
    this.getTarefas();
  }

  getTarefas(): void {
    // buscando a lista de tarefas e atribuindo-a à um array de tarefas 
    this.tarefas = this.tarefaService.getListaTarefas(); 
  }

  riscarTarefa(tarefa: Tarefa): void {
    // a tarefa da iteração do clique, tem seu atributo mudado
    tarefa.feita = !tarefa.feita; 
  }

  removerTarefa(tarefa: Tarefa): void {
    this.tarefaService.removerTarefa(tarefa);
  }
}