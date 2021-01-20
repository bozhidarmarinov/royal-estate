import {Component, OnInit} from '@angular/core';

import {Platform, Events} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public appPages = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        private router: Router,
        public events: Events
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        this.setAppPages();

        this.events.subscribe('savedEstatesChanged', () => {
            this.setAppPages();
        });
    }

    onViewClick(id: string) {
        this.router.navigate(['/home', id]);
    }

    setAppPages() {
        this.appPages = [];
        this.storage.get('savedEstates').then((val) => {
            if (val != null) {
                const data = JSON.parse(val);
                console.log(data);

                data.forEach((e) => {
                    const item: any = {};

                    item.title = 'Ref. No' + e.refNumber;
                    item.url = '/home/' + e.id;

                    this.appPages.push(item);
                });
            }
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
