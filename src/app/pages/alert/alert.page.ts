import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  async presentLoader(interval: number, timeout: number) {
    const modal = await this.modalController.create({
      component: LoaderComponent,
      componentProps: {
        images: this.generateImageUrls(),
        interval: interval,
      },
      backdropDismiss:false,
    });
    modal.present();

    setTimeout(async () => {
      await modal.dismiss();
      this.router.navigate(['/']);
    }, timeout);
  }

  generateImageUrls(): string[] {
    let urls: string[] = [];
    for (let i = 0; i < 30; i++) {
      const randomNum = Math.floor(Math.random() * 20) + 1;
      urls.push(`https://rickandmortyapi.com/api/character/avatar/${randomNum}.jpeg`);
    }
    return urls;
  }
}
