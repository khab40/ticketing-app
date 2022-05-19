import { Publisher, OrderCreatedEvent, Subjects } from '@ticketskhab1973/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
