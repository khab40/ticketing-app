import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ticketskhab1973/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
