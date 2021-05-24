import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public injectedFunWallet = false;

  public restoreAuthenticationTaskCompleted$: Observable<boolean> =
    StoreService.restoreAuthenticationTaskCompleted.pipe();

  public isAuthenticationCompleted$: Observable<boolean> =
    StoreService.isAuthenticationCompleted.pipe();

  constructor(public walletService: WalletService) {}

  public async lazyLoadFunWallet(): Promise<void> {
    await this.walletService.lazyLoadFunWallet();
    this.injectedFunWallet = true;
  }

  public async signAMessage() {
    const signature = await this.walletService.signAMessage('TESTME');
    console.log('Sign message complete. sig -', signature);
  }

  public async sendSignedTransaction() {
    const signature = await this.walletService.sendTransaction({
      to: '0x45Cd08334aeedd8a06265B2Ae302E3597d8fAA28',
      value: '0x00', // 0x38d7ea4c68000 if you want to add some value 0.002 ETH
    });

    console.log('Send signed transaction complete. sig -', signature);
  }
}
