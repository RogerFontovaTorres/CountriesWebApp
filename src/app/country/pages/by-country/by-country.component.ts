import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  searchCountry: string = "";
  thereIsError: boolean = false;

  constructor(private countryService: CountryService){
  }
  
  search(){
    this.thereIsError = false;
    this.countryService.searchCountry(this.searchCountry)
      .subscribe( (answer) => {
        console.log(answer);
      }, (error) => {
        this.thereIsError = true;
      });
    

  }
}
