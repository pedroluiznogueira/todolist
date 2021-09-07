import { Component, OnInit } from '@angular/core';
import { Prioridade } from 'src/app/models/Prioridade';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[] = [
    { texto: "Estudar pela manhã", feita: false, prioridade: Prioridade.alta },
    { texto: "Estudar pela tarde", feita: true, prioridade: Prioridade.baixa }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
