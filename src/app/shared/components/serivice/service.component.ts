import { Component } from "@angular/core";
import { Iobject } from "../../modules/interface";

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceComponent {
    bussinessman: string[] = ["Mukesh Ambani", "Gautam Adani", "Cyrus Ponnawalla", "Sundar Pichai", "Aditya Birla"]
    bussinessMans: Array<Iobject> = [
        {
            fname: "Mukhesh",
            lname: "Ambani",
            email: "mukeshk@gmail.com",
            contact: 49090909090
        },
        {
            fname: "Gautam",
            lname: "Adani",
            email: "gautama@gmail.com",
            contact: 3453453456
        },
        {
            fname: "Cyrus",
            lname: "Poonawalla",
            email: "cyrusp@gmail.com",
            contact: 9898989878
        },
        {
            fname: "Sundar",
            lname: "Pichai",
            email: "sundarp@gmail.com",
            contact: 67876787678
        },
        {
            fname: "Aditya",
            lname: "Birla",
            email: "adityab@gmail.com",
            contact: 343453453
        }
    ]
}