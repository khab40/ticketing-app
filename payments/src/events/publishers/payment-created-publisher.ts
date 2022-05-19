import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketskhab1973/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
