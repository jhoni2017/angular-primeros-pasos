import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string='iroman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }

  public changeHero():void{
    this.name='Hulk';

  }
  public changeAge():void{
    this.age=35;
  }

  public resetForm():void{
    this.name='iroman';
    this.age=45;
  }

}
