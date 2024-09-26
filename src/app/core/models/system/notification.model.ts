export type Status = 'success' | 'error' | 'warning' | 'info';

export class Notification {
    status: Status = 'info';
    message: String = 'Pendiente';
    isClose: boolean = false;
    isDelete: boolean = false;

    constructor(status: Status, message: String) {
        this.status = status;
        this.message = message;
        this.startTimer();
    }

    private startTimer(): void {
        setTimeout(() => {
            this.isClose = true;
        }, 2500);
        setTimeout(() => {
            this.isDelete = true;
        }, 3000);
    }
}