import {Component, Input, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {notify} from "application";

@Component({
    templateUrl: 'pages/received-notifications/received-notifications-component.html',

})
export class ReceivedNotifications implements OnInit {
	private notificationsList;
	constructor(private userService: UserService){}

	ngOnInit(): void {
	    this.userService.getReceivedNotifications()
            .subscribe(
				notificationsHistory => this.notificationsList = notificationsHistory,
				error =>  console.log(error),
				() => console.log("Done get received notifications")

			);

	}


}