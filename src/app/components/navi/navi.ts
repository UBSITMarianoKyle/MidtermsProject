import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navi.html',
  styleUrls: ['./navi.css']
})
export class Navi {}