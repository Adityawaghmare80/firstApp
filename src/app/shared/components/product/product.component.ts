import { Component } from "@angular/core";
import { Heroes, Iobject } from "../../modules/interface";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    heroes : string[] = ["Shah Rukh Khan", "Vikrant Massey", "Sidharth Malhotra", "Ritesh Deshmukh", "Sunny Deol"]
    herosArr: Array<Heroes> = [
        {
            fname: "Shah Rukh",
            lname: "Khan",
            email: "srk@gmail.com",
            contact: 2722828212
        },
        {
            fname: "Vikrant",
            lname: "Massey",
            email: "vikrantm@gmail.com",
            contact: 1234567890
        },
        {
            fname: "Sidharth",
            lname: "Malhotra",
            email: "sm@gmail.com",
            contact: 9876543211
        },
        {
            fname: "Ritesh",
            lname: "Deshmukh",
            email: "rd@gmail.com",
            contact: 6785436761
        },
        {
            fname: "Sunny",
            lname: "Deol",
            email: "sunnypajji@gmail.com",
            contact: 2567998712
        }
    ]
}