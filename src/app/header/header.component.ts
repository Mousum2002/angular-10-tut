import { Component } from "@angular/core";
import {TopHeader} from './top-header/top-header'
import {TopMenu} from './top-menu/top-menu'
import {MainMenu} from './main-menu/main-menu'

@Component({
    selector:'app-header',

    imports:[TopHeader,TopMenu,MainMenu],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{

}