## Breadcrumb

Accessible `Breadcrumb` component that provides the required aria attributes for
it's links. It follows the
[WAI-ARIA Breadcrumb Pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#breadcrumb).

# Props

### Accessibilty

- `Breadcrumbs` should have `aria-label` or `aria-labelledby` attribute.
- `BreadcrumbLink` should have `aria-current` set to `page` if the currenct page
  is loaded.
- `BreadcrumbLink` extends the accessibility features of [Link](#Link).

### Composition

- `BreadcrumbLink` uses [Link](#Link).

### Example

```js

<!-- IMPORT_EXAMPLE src/breadcrumbs/stories/__js/Breadcrumbs.component.jsx -->

```