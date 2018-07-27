import { Component, OnInit } from '@angular/core';

import {TokenService} from '../token.service';
import { Token } from '../model/token';

@Component({
  selector: 'app-token-list',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  tokens: Token[];
  selectedToken: Token;

  constructor(private tokenService: TokenService) {}

  getToken() {
     this.tokenService.getTokens().then(tokens => this.tokens = tokens);
  }

  ngOnInit(): void {
     this.getToken();
  }

  onSelect(tok: Token): void {
    this.selectedToken = tok;
  }
}
