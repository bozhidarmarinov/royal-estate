import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../database/data.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-estate-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    private promise;
    private id = '';
    private city = '';
    private estate: any = {};

    constructor(
        private service: DataService,
        private activatedRoute: ActivatedRoute,
        private storage: Storage,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.promise = this.service.getEstate(this.id)
            .subscribe({
                next: estate => {
                    const addressArr = estate.address.split(' ');
                    this.estate = estate;
                    this.city = addressArr[addressArr.length - 1];
                    this.storage.set('currentEstate', JSON.stringify(this.estate));

                    this.router.navigate(['home/' + this.id + '/overview']);
                }
            });
    }

    ngOnDestroy() {
        this.promise.unsubscribe();
    }
}
