import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import {IonicModule} from '@ionic/angular';

import {MapPageRoutingModule} from './map-routing.module';

import {MapPage} from './map.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MapPageRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD119HEN-wqLyNxwxMNDeOQC-U0Z82Dldg'
        })
    ],
    declarations: [MapPage]
})
export class MapPageModule {
}
