## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`属性来定义 Button 的样式。

```html
<div>
  <ln-button>默认按钮</ln-button>
  <ln-button type="primary">主要按钮</ln-button>
  <ln-button type="danger">危险按钮</ln-button>
</div>
```
:::

### 禁用状态

按钮的不可用状态。

:::demo 使用`disabled`属性指定按钮是否可用。

```html
<div>
  <ln-button disabled>默认按钮</ln-button>
  <ln-button disabled type="primary">主要按钮</ln-button>
  <ln-button disabled type="danger">危险按钮</ln-button>
</div>
```
:::

### 不同尺寸

按钮的不同尺寸。

:::demo 使用`size`属性指定按钮的尺寸，可以是 `small`、`large`，默认是中等大小。

```html
<div>
  <ln-button size="large">大型按钮</ln-button>
  <ln-button>默认按钮</ln-button>
  <ln-button size="small">小型按钮</ln-button>
</div>

```
:::

### 图标按钮

带有图标的按钮。

:::demo 使用`icon`属性指定按钮的图标。

```html
<div>
  <ln-button type="primary" icon="ln-icon-edit">编辑</ln-button>
  <ln-button type="danger" icon="ln-icon-delete">删除</ln-button>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |  small / large            |    —     |
| type     | 类型   | string    |   primary / danger |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
