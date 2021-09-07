import { Component, OnInit } from '@angular/core';
import { Prioridade } from 'src/app/models/Prioridade';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  texto!: string;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
  }

  addTarefa(): void {
    const tarefa: Tarefa = {texto: this.texto, feita: true, prioridade: Prioridade.alta };
    this.tarefaService.addTarefa(tarefa);

    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("tf_2do");
    input.value = "";
  }

}
