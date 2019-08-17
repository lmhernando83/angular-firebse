import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any;
  constructor(private conexion:ConexionService) {
    this.items = this.conexion.getItems().subscribe(item => {
      this.items = item;
    })
   }

  ngOnInit() {
  }

}
