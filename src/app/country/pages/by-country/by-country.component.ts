import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  searchCountry: string = "";
  thereIsError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  searchText: string = "";
  showSuggerences: boolean = false;

  constructor(private countryService: CountryService) {
  }

  search(searchText: string) {
    this.searchCountry = searchText;
    this.thereIsError = false;
    this.countryService.searchCountry(this.searchCountry)
      .subscribe((answer) => {
        this.countries = answer;
      }, (error) => {
        this.thereIsError = true;
      });
  }

  sugerences(text: string) {
    this.thereIsError = false;
    this.searchText = text;
    if (text !== "") {
      this.showSuggerences = true;
      this.countryService.searchCountry(text)
        .subscribe(
          countries => this.suggestedCountries = countries,
          (err) => this.suggestedCountries = []
        );

    }else{
      this.showSuggerences = false;
    }
  }

  searchSuggested(text: string) {
    this.search(text);
    this.showSuggerences = false;
  }
}
