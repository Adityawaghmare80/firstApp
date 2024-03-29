import { Component } from "@angular/core";
import { Iobject } from "../../modules/interface";

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class StudentComponent {
    players: string[] = ["Rohit Sharma", "Virat Kohli", "Shubman Gill", "Rinku Singh", "KL Rahul"];
    playersArr: Array<Iobject> = [
        {
            fname: "Rohit",
            lname: "Sharma",
            email: "rohit@gmail.com",
            contact: 8908908908
        },
        {
            fname: "Virat",
            lname: "Kohli",
            email: "vk@gmail.com",
            contact: 123131233
        },
        {
            fname: "Shubhman",
            lname: "Gill",
            email: "shubgill@gmail.com",
            contact: 6786786787
        },
        {
            fname: "Rinku",
            lname: "Singh",
            email: "rsingh@gmail.com",
            contact: 3453453345
        },
        {
            fname: "KL",
            lname: "Rahul",
            email: "klrahul@gmail.com",
            contact: 9090909898
        }
    ]
}