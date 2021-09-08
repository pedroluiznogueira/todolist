import { Component, OnInit } from '@angular/core';
import { Prioridade } from 'src/app/models/Prioridade';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // array para receber a lista de tarefas do serviço
  tarefas!: Tarefa[];

  // injetando o serviço
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    // boa prática 
    this.getTarefas();
  }

  getTarefas(): void {
    this.tarefas = this.tarefaService.getListaTarefas(); 
  }
}