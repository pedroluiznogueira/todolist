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
  nivelPrioridade!: string | undefined;


  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
  }

  // função chamada ao escutar o evento do envio do formulário
  submeter(texto: string): void {
    if (texto == null) return;

    if (texto.match(/^#(1|2|3)\s/)) {
      this.nivelPrioridade = texto.match(/^#(1|2|3)\s/)?.shift()?.slice(0,2);
      let novaTarefa: Tarefa | undefined = this.adicionarPrioridade(this.nivelPrioridade);
      this.envioFormulario.emit(novaTarefa);
    } else {
      let novaTarefa: Tarefa | undefined = {texto: this.texto, feita: false,prioridade: Prioridade.baixa};
      this.envioFormulario.emit(novaTarefa);
    }

    // limpando input
    this.limparInput();
  }

  // limpa input após o envio
  limparInput() {
    let input: HTMLInputElement = <HTMLInputElement>document.querySelector("input");
    input.value = "";
  }

  adicionarPrioridade(nivelPrioridade: string | undefined): Tarefa {
    if (nivelPrioridade == "#1") {
        let novaTarefa: Tarefa = {texto: this.texto.slice(3),feita: false,prioridade: Prioridade.baixa};
        console.log("Prioridade baixa")
        return novaTarefa;

    } else if (nivelPrioridade == "#2") {
      let novaTarefa: Tarefa = {texto: this.texto.slice(3),feita: false,prioridade: Prioridade.media};
        console.log("Prioridade media")
        return novaTarefa;

    } else {
        let novaTarefa: Tarefa = {texto: this.texto.slice(3),feita: false,prioridade: Prioridade.alta};
        console.log("Prioridade alta");
        return novaTarefa;
    }
}

}