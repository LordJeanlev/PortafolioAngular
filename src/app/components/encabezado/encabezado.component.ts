import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from "src/app/service/portfolio.service.service";

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
miPortfolio:any;
  constructor( private portfolioDatos:PortfolioServiceService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data
    });

  }

}
