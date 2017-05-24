import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthorizationService} from '../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  constructor(private title: Title,
              private auth: AuthorizationService) {
    this.title.setTitle('VIR e-Care solutions');
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
