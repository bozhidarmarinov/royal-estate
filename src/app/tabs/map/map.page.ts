import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
    private estate: any = {};

    constructor(
        private storage: Storage
    ) {
    }

    ngOnInit() {
        this.storage.get('currentEstate').then((val) => {
            if (val != null) {
                this.estate = JSON.parse(val);
            }
        });
    }
}
