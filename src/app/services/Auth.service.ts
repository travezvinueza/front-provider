import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8082/api/v1'; 

  constructor(private readonly http: HttpClient) { }

  loginWithProvider(provider: string) {
    const oauthUrl = `${this.baseUrl}/oauth2/authorization/${provider}`;
    window.location.href = oauthUrl;

    // window.open(oauthUrl, '_blank', 'width=500,height=600');
  }

}
