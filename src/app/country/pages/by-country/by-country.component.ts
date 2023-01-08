import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  searchCountry: string = "";

  constructor(private countryService: CountryService){
  }
  
  search(){
    this.countryService.searchCountry(this.searchCountry)
      .subscribe( answer => {
        console.log(answer);
      });
  }
}
