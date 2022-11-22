import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from "src/app/service/portfolio.service.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
about:any;
  constructor(private  portfolioDatos:PortfolioServiceService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.about=data
    });
  }

}
