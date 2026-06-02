## User Testing Results

User testing was conducted with a group of individuals using assistive technologies. The following feedback was gathered:

1. **Screen Reader Compatibility**: All users reported that the added aria-labels improved their understanding of the PaymentTable's structure and content.
2. **Navigation Ease**: Users found the scope attributes helpful for navigating through the table efficiently.
3. **Suggestions for Improvement**: Some users suggested adding tooltips for additional context on payment statuses.

Overall, the updates significantly enhanced the accessibility of the PaymentTable component.

## Exponential Backoff with Jitter

Exponential backoff with jitter is a strategy used to handle retries in a more efficient manner, especially in distributed systems. This approach helps to avoid overwhelming the system during high traffic or failure scenarios.

### How It Works
1. **Initial Delay**: Start with a base delay (e.g., 100ms).
2. **Exponential Increase**: After each failed attempt, increase the delay exponentially (e.g., double the delay).
3. **Add Jitter**: Introduce randomness to the delay to prevent thundering herd problems. This can be done by adding a random value within a certain range to the calculated delay.

### Example
For instance, if the base delay is 100ms, the delays for the first few retries might look like this:
- Attempt 1: 100ms
- Attempt 2: 200ms
- Attempt 3: 400ms
- Attempt 4: 800ms

Adding jitter might result in:
- Attempt 1: 100ms + random(0-50ms)
- Attempt 2: 200ms + random(0-100ms)
- Attempt 3: 400ms + random(0-200ms)
- Attempt 4: 800ms + random(0-400ms)

This method helps to distribute the load evenly over time and increases the chances of successful retries without causing additional strain on the system.