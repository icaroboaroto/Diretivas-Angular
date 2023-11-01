import { Component } from '@angular/core';
import { Tarefa } from './tarefa.mode';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  tasks: Tarefa[] = [
    new Tarefa('Sair com a Ana', false),
    new Tarefa('Beijar a Ana', true),
    new Tarefa('Presentear a Ana', false),
    new Tarefa('Buscar a Ana', true),
    new Tarefa('Elogiar a Ana', false),
  ];

  toggleCompleted(task: Tarefa) {
    task.completed = !task.completed;
  }
}
