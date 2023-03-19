import {Injectable} from '@angular/core';
import notify from 'devextreme/ui/notify';
import hideToasts from 'devextreme/ui/toast/hide_toasts';

export enum TOAST_TYPE {
    ERROR = 'error',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning'
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private readonly predefinedDirection = 'down-stack';
    private readonly predefinedPosition = 'top right';

    addToast(type: TOAST_TYPE, message: string, displayTime: number = 3500): void {
        notify({
                message,
                height: 45,
                minWidth: 200,
                maxWidth: 400,
                type,
                displayTime,
                animation: {
                    show: {type: 'fade', duration: 400, from: 0, to: 1},
                    hide: {type: 'fade', duration: 40, to: 0},
                }
            },
            {
                direction: this.predefinedDirection,
                position: this.predefinedPosition
            });
    }

    hideAll(): void {
        hideToasts();
    }
}
