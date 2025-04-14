import { Component, OnInit } from '@angular/core';

interface Tarea {
  taskNombre: string;
  taskPrioridad: string;
  taskTiempo: number;
  completado: boolean;
}


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaTareas: Tarea [] = [];

  nuevaTarea: Tarea = {
    taskNombre: '',
    taskPrioridad: '',
    taskTiempo: 0,
    completado: false
  }

  prioridades = ['Alta','Media','Baja'];

  nombre = '';
  prioridadSeleccionada = '';
  tiempoEstimado: number | null = null;
  tiempoTotal: number | null = null;




  ngOnInit(): void {
    
  }


  AgregarTareas(){
    if(this.nombre !== '' && this.prioridadSeleccionada !== '' && this.tiempoEstimado !== null){
      this.nuevaTarea = {
        taskNombre: this.nombre,
        taskPrioridad: this.prioridadSeleccionada,
        taskTiempo: this.tiempoEstimado,
        completado: false
      }
      this.listaTareas.push(this.nuevaTarea);
      this.nombre = '';
      this.prioridadSeleccionada= '';
      this.tiempoEstimado = null;
    }
    else{
      alert('Porfavor llene todos los campos')
    }
  }

get totalMinutos(): number{
  return this.listaTareas.reduce((suma, tarea) => suma + Number(tarea.taskTiempo),0)
}
}
