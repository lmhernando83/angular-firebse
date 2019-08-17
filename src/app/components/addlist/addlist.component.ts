import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  item:any = {
    name: ''
  }

  constructor(private conexion:ConexionService) { }

  ngOnInit() {
  }

  add(){
    this.conexion.addItem(this.item);
    this.item.name = '';
  }

}
