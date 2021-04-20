import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente(): Cliente {
    let cliente = new Cliente();
    cliente.nome = 'Cleber Santos Sanches';
    cliente.id = 123456;
    cliente.cpf = '30039779890';
    cliente.dataCadastro = "15/04/2021";
    return cliente;
  }
}
