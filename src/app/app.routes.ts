import { Routes } from '@angular/router';
import { Home } from './components/home/home';

import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { Event } from './databinding/event/event';
import { Interpolation} from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Style } from './databinding/style/style';
import { Twoway } from './databinding/twoway/twoway';





export const routes: Routes = [
    {path :'Home',component:Home},
    {path :'Attribute',component:Attribute},
    {path :'Class',component:Class},
    {path :'Event',component:Event},
    {path :'Interpolation',component:Interpolation},
    {path :'Property',component:Property},
    {path :'Style',component:Style},
    {path :'Twoway',component:Twoway}

];
