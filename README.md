# dashboard-ui

NovaPay merchant dashboard — React SPA.

## Stack
React 18, TypeScript, React Query, Tailwind CSS + design-system

## Accessibility

### Screen Reader Announcements

Ensure all interactive elements have appropriate ARIA roles and labels. Use `aria-live` regions for dynamic content updates to inform users of changes. Regularly test with screen readers to verify announcements are clear and timely.

### Examples of ARIA Labels

- For a button: `<button aria-label=\"Submit Payment\">Submit</button>`  
- For an input field: `<input type=\"text\" aria-label=\"Search for products\">`  
- For a link: `<a href=\"#\" aria-label=\"Go to homepage\">Home</a>`  
- For PaymentTable: `<table aria-label=\"Payment Details\">...</table>`