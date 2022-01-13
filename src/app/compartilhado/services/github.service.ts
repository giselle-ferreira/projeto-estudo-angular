import { Repository } from './../../exemplos/app-github/models/repository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly baseUrl = 'https://api.github.com'
  constructor(private http: HttpClient) { }

  getUserRepositories(username: string) : Observable<Repository[]>{
    const url = `${this.baseUrl}/users/${username}/repos`

    return this.http.get<Repository[]>(url);

    // requisita - o get retorna um observable
    // esse metodo repassa para o componente o observable que o http get está criando

  }
}
