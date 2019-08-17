import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt
  items: any;
  editItem: any = {
    name: ''
  }
  constructor(private conexion:ConexionService) {
    this.items = this.conexion.getItems().subscribe(item => {
      this.items = item;
    })
   }

  ngOnInit() {
  }

  delete(item){
    this.conexion.removeItem(item);
  }

  edit(item){
    this.editItem = item;
  }

  editingItem(){
    this.conexion.editItem(this.editItem);
  }

}
