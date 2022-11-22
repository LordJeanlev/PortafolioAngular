import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/service/portfolio.service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacionList:any;
  constructor(private portfoliosDatos:PortfolioServiceService) {}

  ngOnInit(): void { 
    this.portfoliosDatos.obtenerDatos().subscribe(data=>{
     
      this.educacionList=data.estudios
    });
  }

}
