import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

export interface IServices {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  isActive = false;
  services: IServices[] = [];

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.services.push(
      {icon: 'assistive-listening-systems', title: 'Advanced Driver Assistance Systems'},
      {icon: 'play', title: 'In-Vehicle Infotainment'},
      {icon: 'code', title: 'Vehicle Software Development'},
      {icon: 'server', title: 'Autonomous Driving Addons'},
      {icon: 'car', title: 'Car As A Service'},
      // {icon: 'cubes', title: 'Smart Manufacturing'},
      {icon: 'database', title: 'Vehicle Data Collection'},
      {icon: 'bar-chart', title: 'Data Analytics'},
      {icon: 'tags', title: 'Automated Data Labelling'}
    );
  }
}
