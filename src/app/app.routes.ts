import { Routes } from '@angular/router';
import { DriverListComponent } from './component/driver-list/driver-list.component';
import { AddMDBF1DriverComponent } from './component/add-mdb-f1-driver/mdb-f1-driver.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = 
[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'driverList', component: DriverListComponent},
    {path: 'add_delete_Driver', component: AddMDBF1DriverComponent}

];
