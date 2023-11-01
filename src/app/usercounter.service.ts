export class UserCounterService {

    public activeUserChangeCounter = 0;
    public inactiveUserChangeCounter = 0;

    incrementActiveUserCounter () {
        this.activeUserChangeCounter++;
    }

    incrementInactiveUserCounter () {
        this.inactiveUserChangeCounter++;
    }

}
