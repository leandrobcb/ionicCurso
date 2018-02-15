import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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
  providers:[
    MoovieProvider
  ]
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

  public lista_filmes= new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private MoovieProvider: MoovieProvider 
  ) {
  }
  public somaDoisNumeros(valor1:number, valor2:number):void {
    alert(valor1+valor2);
  }

  ionViewDidLoad() {
    this.MoovieProvider.getLastasMovies().subscribe(
      data=>{
        const response = (data as any);
        const obj_retorno = JSON.parse(response._body);
        this.lista_filmes = obj_retorno.results;
        console.log((data as any)._body);
      },error =>{
        console.log(error)
      }
    );
  }

}
