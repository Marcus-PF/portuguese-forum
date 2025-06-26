/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @ptforum/metrics – Canonical Event Types         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines a centralized, documented list of supported
 * metrics events to ensure consistency and traceability.
 */

export type EventName =
  | 'page_view'
  | 'member_signup'
  | 'language_selected'
  | 'post_created'
  | 'event_rsvp'
  | 'donation_started'
  | 'donation_completed'
  | 'api_request';

/**
 * Descriptions for each supported event.
 */
export const EVENT_DESCRIPTIONS: Record<EventName, string> = {
  page_view: 'User viewed a page',
  member_signup: 'New member joined the platform',
  language_selected: 'User changed interface language',
  post_created: 'User published a new post',
  event_rsvp: 'User submitted an RSVP for an event',
  donation_started: 'User initiated a donation flow',
  donation_completed: 'User completed a donation',
  api_request: 'API endpoint was called',
};
