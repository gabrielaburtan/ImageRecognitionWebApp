import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestServiceService } from './request-service.service';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})

export class TableServiceService {

  private tablesRequestUrl : string = 'table'

  constructor(private requestService : RequestServiceService) {
  }

  public getTables() : Observable<Table[]>{
    return this.requestService.get(this.tablesRequestUrl);
  }
}
