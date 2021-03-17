## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<div>
  <len-button>Default</len-button>
  <len-button type="primary">Primary</len-button>
  <len-button type="success">Success</len-button>
  <len-button type="info">Info</len-button>
  <len-button type="warning">Warning</len-button>
  <len-button type="danger">Danger</len-button>
</div>

<div>
  <len-button plain>Plain</len-button>
  <len-button type="primary" plain>Primary</len-button>
  <len-button type="success" plain>Success</len-button>
  <len-button type="info" plain>Info</len-button>
  <len-button type="warning" plain>Warning</len-button>
  <len-button type="danger" plain>Danger</len-button>
</div>

<div>
  <len-button round>Round</len-button>
  <len-button type="primary" round>Primary</len-button>
  <len-button type="success" round>Success</len-button>
  <len-button type="info" round>Info</len-button>
  <len-button type="warning" round>Warning</len-button>
  <len-button type="danger" round>Danger</len-button>
</div>

<div>
  <len-button icon="len-icon-search" circle></len-button>
  <len-button type="primary" icon="len-icon-edit" circle></len-button>
  <len-button type="success" icon="len-icon-check" circle></len-button>
  <len-button type="info" icon="len-icon-message" circle></len-button>
  <len-button type="warning" icon="len-icon-star-off" circle></len-button>
  <len-button type="danger" icon="len-icon-delete" circle></len-button>
</div>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |