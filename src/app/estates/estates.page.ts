import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../database/data.service';

@Component({
    selector: 'app-estates',
    templateUrl: './estates.page.html',
    styleUrls: ['./estates.page.scss'],
})
export class EstatesPage implements OnInit, OnDestroy {
    private promise;
    private name = '';
    private locationEstates: any = [];

    constructor(
        private service: DataService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.promise = this.service.getLocationEstates(this.name)
            .subscribe({
                next: locationEstates => {
                    this.locationEstates = locationEstates;
                }
            });
    }

    ngOnDestroy() {
        this.promise.unsubscribe();
    }

    onViewClick(id: string) {
        this.router.navigate(['/home', id]);
    }
}
