import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  items: any;
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

}
