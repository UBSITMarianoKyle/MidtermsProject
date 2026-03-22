import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';

import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Style } from './databinding/style/style';
import { Twoway } from './databinding/twoway/twoway';
import { EventComponent } from './databinding/event/event';

import { ProductsComponent } from './products/products';
import { ProductList } from './products/products-list/products-list';
// Remove ProductDetails from routes entirely for modal inline approach

import { SupplierDetailsComponent } from './components/supplier-details/supplier-details';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list';

export const routes: Routes = [
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },

  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  { path: 'Home', component: HomeComponent },
  { path: 'Attribute', component: Attribute },
  { path: 'Class', component: Class },
  { path: 'Event', component: EventComponent },
  { path: 'Interpolation', component: Interpolation },
  { path: 'Property', component: Property },
  { path: 'Style', component: Style },
  { path: 'Twoway', component: Twoway },

  { path: 'Products', component: ProductsComponent },

  // ProductList route — modal handled inline
  { path: 'products1', component: ProductList },

  // Catch-all (optional)
  { path: '**', redirectTo: 'Home' }
];