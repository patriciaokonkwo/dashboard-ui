# PaymentTable Accessibility Updates

## Overview
The PaymentTable component has been updated to improve accessibility for users relying on assistive technologies.

## Changes Made
- **Added aria-labels**: Each column header now includes an `aria-label` to provide context for screen readers.
- **Scope Attributes**: Column headers have been assigned appropriate `scope` attributes to enhance navigation.

## Examples
### Aria-labels
```html
<th aria-label="Payment Amount">Amount</th>
<th aria-label="Payment Status">Status</th>
```

### Scope Attributes
```html
<th scope="col">Payment Amount</th>
<th scope="col">Payment Status</th>
```

## Conclusion
These updates ensure that the PaymentTable is more accessible and user-friendly for all users, including those using screen readers.
