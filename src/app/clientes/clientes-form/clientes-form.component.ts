import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicos';
import { Cliente } from '../model';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucesso: boolean = false;
  erro: boolean = false;
  errors : String[];
  stringObject  : any;

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
    this.errors = [];  
  }

  ngOnInit(): void {
  }

  clicar() {
    console.log(this.cliente);
  }

  onSubmit() {
    this.service
      .salvar(this.cliente)
      .subscribe(response => {
        console.log(response);
        this.sucesso = true;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;

        let stringJson : any =  JSON.stringify(errorResponse.error.errors);

        this.stringObject = JSON.parse(stringJson);
        console.log("JSON object -", this.stringObject);
      }
      );
  }

}
