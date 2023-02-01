import { SendNotification } from "./send-notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";

describe('Send Notification',()=>{
    it('should be able to send notification',async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const {notification} = await sendNotification.execute({
            recipientId: 'example-recipient-id',
            content: 'This is a notification',
            category: 'social'
        });
        
        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);

    })
})