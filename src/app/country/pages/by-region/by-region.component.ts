import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = "";
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {
    if (this.activeRegion !== region) {
      this.activeRegion = region;
      this.countries = [];
      this.countryService.getCountryByRegion(region)
        .subscribe(answer => {
          this.countries = answer;
        });
    }
  }
  getCssClass(region: string): string {
    return this.activeRegion === region ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  searchRegion(region: string): void {
  }

}
