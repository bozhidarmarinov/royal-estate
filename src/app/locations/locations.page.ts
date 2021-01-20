import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../database/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.page.html',
    styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit, OnDestroy {
    private promise;
    private locations: any = [];

    constructor(
        private service: DataService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.promise = this.service.getLocations()
            .subscribe({
                next: locations => {
                    this.locations = locations;
                }
            });
    }

    ngOnDestroy() {
        this.promise.unsubscribe();
    }

    locationClick(name: string) {
        this.router.navigate(['/estates', name]);
    }
}
