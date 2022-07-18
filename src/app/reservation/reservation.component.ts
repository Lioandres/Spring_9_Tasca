import { Component, OnInit } from '@angular/core';
import { ExcursionsService } from '../services/excursions.service';
import { AuxService } from '../services/general.service';
import { Excursion } from '../interfaces/interfaces';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private auxServ:AuxService,
              private excursionsService:ExcursionsService ) { }

  ngOnInit(): void {
  }

  
  get excursionList (){
    return this.excursionsService.excursionList  
  }


  get userRepositoryCart (){
    return this.auxServ.userRepositoryCart
  }

  
}