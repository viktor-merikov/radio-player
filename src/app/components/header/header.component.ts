import {Component} from '@angular/core';
import {TOAST_TYPE, ToastService} from '../../services/toast.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private toastService: ToastService) {
    }

    onNotify(): void {
        this.toastService.addToast(TOAST_TYPE.INFO, "I'm very informative toast.");
    }
}
