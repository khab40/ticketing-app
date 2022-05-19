import { Publisher, Subjects, TicketCreatedEvent } from '@ticketskhab1973/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
