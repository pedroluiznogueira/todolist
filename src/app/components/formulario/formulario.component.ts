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

  // emitindo o evento do envio do formulario, e com ele levando uma tarefa
  @Output() envioFormulario:EventEmitter<Tarefa> = new EventEmitter();

  // valor enviado no input
  texto!: string;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
  }

  // função chamada ao escutar o evento do envio do formulário
  submeter(): void {
    if (this.texto == null) return;

    // emitindo um evento, e passando como parâmetro a tarefa que vai ser levada junto
    this.envioFormulario.emit(this.novaTarefa())

    // limpando input
    this.limparInput();
  }

  // criando nova tarefa, para ser emitida
  novaTarefa(): Tarefa{
    const tarefa: Tarefa = {
      texto: this.texto,
      // se aqui fosse criada como true, não riscaria na lógica atual
      feita: false, 
      prioridade: Prioridade.alta
    };

    return tarefa;
  }

  // limpa input após o envio
  limparInput() {
    let input: HTMLInputElement = <HTMLInputElement>document.querySelector("input");
    input.value = "";
  }

}