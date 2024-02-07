import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/shared/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent]
})
export class HomeComponent {

}
