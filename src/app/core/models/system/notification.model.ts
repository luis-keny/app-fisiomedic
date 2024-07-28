type Status = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
    status: Status;
    message: String;
}

export class NotificationInterative {
    status: Status = 'info';
    message: String = 'Pendiente';
    close: boolean = false;
    delete: boolean = false;

    constructor(status: Status, message: String) {
        this.status = status;
        this.message = message;
        this.startTimer();
    }

    private startTimer(): void {
        setTimeout(() => {
            this.close = true;
        }, 2500);
        setTimeout(() => {
            this.delete = true;
        }, 3000);
    }
}