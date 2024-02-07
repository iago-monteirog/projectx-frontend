import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/shared/header/header.component";
import { ContentComponent } from "../content/content.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ContentComponent, FooterComponent]
})
export class HomeComponent {

}
