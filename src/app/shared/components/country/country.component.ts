import { Component } from "@angular/core";
import { Countries } from "../../modules/interface";

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})

export class CountrytComponent {
    countries: string[] = ["Mexico", "France", "Switzerland", "Spain", "Germany"]
    countryArr: Array<Countries> = [
        {
            countryname: "Mexico",
            countrycapital: "Mexico City",
            countrylanguage: "Spanish",
            countrycurrency: "Mexican Peso"
        },
        {
            countryname: "France",
            countrycapital: "Paris",
            countrylanguage: "French",
            countrycurrency: "Euro"
        },
        {
            countryname: "Switzerland",
            countrycapital: "Bern",
            countrylanguage: "Romansh",
            countrycurrency: "Swiss Franc"
        },
        {
            countryname: "Spain",
            countrycapital: "Madrid",
            countrylanguage: "Spanish",
            countrycurrency: "Euro"
        },
        {
            countryname: "Germany",
            countrycapital: "Berlin",
            countrylanguage: "German",
            countrycurrency: "Euro"
        }
    ]
}