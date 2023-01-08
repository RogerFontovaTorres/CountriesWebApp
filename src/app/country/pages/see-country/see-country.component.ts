import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countryService.getCountryByAlpha(id) ),
        tap( console.log )
      )
      .subscribe( answer => this.country = answer[0] );
  }

}
