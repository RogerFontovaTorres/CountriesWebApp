import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  searchCountry: string = "";
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService){
  }
  
  search(searchText: string){
    this.searchCountry = searchText;
    this.thereIsError = false;
    this.countryService.searchCapital(this.searchCountry)
      .subscribe( (answer) => {
        this.countries = answer;
      }, (error) => {
        this.thereIsError = true;
      });
  }

  sugerences(text: string){
    this.thereIsError = false;
    
  }
}
