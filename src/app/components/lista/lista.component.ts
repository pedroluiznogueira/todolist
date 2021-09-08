import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // variável para comparar para tentar riscar tarefa
  verificarRiscada: boolean = false;

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
    // dessa forma não consigo referenciar que só quero que isso seja feito para a tarefa da iteração que cliquei
    this.verificarRiscada = !this.verificarRiscada; 
  }
}