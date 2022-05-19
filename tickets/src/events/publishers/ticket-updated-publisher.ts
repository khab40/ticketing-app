import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketskhab1973/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
