import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Prioridade } from 'src/app/models/Prioridade';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() envioFormulario:EventEmitter<Tarefa> = new EventEmitter();

  texto!: string;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
  }

  submeter(texto: string) {
    this.envioFormulario.emit(this.novaTarefa())
  }

  novaTarefa(): Tarefa{
    const tarefa: Tarefa = {
      texto: this.texto,
      feita: true, 
      prioridade: Prioridade.alta 
    };

    return tarefa;
  }

}