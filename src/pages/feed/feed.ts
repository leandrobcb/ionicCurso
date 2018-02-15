import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuarios:string = "Leandro Barbosa-code";

  public obj_feed = {
    titulo:"leandro Barbosa",
    data: "03 de dezembro de 1983",
    descricao: "teste de um aplicativo novo",
    qtd_likes:10,
    qtd_comments:4,
    time_comment:"10 horas atras"

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public somaDoisNumeros(valor1:number, valor2:number):void {
    alert(valor1+valor2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(2,2);

  }

}
