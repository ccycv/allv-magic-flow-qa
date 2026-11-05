/** Summarize invented build events. Input never contains real customer data. */
export function summarize(events) {
  return {total: events.length, failed: events.filter(event => event.status === 'failed').length};
}
