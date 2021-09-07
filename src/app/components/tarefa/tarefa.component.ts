import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

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
