import { Subjects, Publisher, OrderCancelledEvent } from '@ticketskhab1973/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
