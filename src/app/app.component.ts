import { Component } from '@angular/core';
import { Tarefa } from './models/Tarefa';
import { TarefaService } from './services/tarefa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoListAngular';

  constructor(private tarefaService: TarefaService) {
  }

  // passando a tarefa da emissão para a função de adiciona tarefa do serviço
  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefaService.addTarefa(tarefa);
  }
}
