## Layout 布局

通过12分栏便捷的创建布局。

### 等宽布局

默认为等宽分栏。

:::demo

```html
<div class="ln-container">
  <ln-row>
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
    <ln-col><div class="grid-content bg-purple-light"></div></ln-col>
  </ln-row>
  <ln-row>
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
    <ln-col><div class="grid-content bg-purple-light"></div></ln-col>
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
  </ln-row>
  <ln-row>
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
    <ln-col><div class="grid-content bg-purple-light"></div></ln-col>
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
    <ln-col><div class="grid-content bg-purple-light"></div></ln-col>
  </ln-row>
</div>
```
:::

### 固定宽度

支持指定分栏的宽度。

:::demo 通过指定列的 `span` 属性以确定列的宽度，值的范围为 1 ~ 12。

```html
<div class="ln-container">
  <ln-row>
    <ln-col :span="4"><div class="grid-content bg-purple"></div></ln-col>
  </ln-row>
  <ln-row>
    <ln-col :span="6"><div class="grid-content bg-purple"></div></ln-col>
  </ln-row>
  <ln-row>
    <ln-col :span="8"><div class="grid-content bg-purple"></div></ln-col>
  </ln-row>
</div>
```
:::

### 分栏间隔

支持指定偏移的栏数。

:::demo 通过指定行的 `gutter` 属性以确定列与列之间的间隔，单位为 `px`。

```html
<div class="ln-container">
  <ln-row :gutter="20">
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
    <ln-col><div class="grid-content bg-purple-light"></div></ln-col>
    <ln-col><div class="grid-content bg-purple"></div></ln-col>
    <ln-col><div class="grid-content bg-purple-light"></div></ln-col>
  </ln-row>
</div>
```
:::

### 分栏偏移

:::demo 通过指定列的 `offset` 属性以确定列的偏移量，值得范围为 1 ~ 11。

```html
<div class="ln-container">
  <ln-row>
    <ln-col :span="2" :offset="2"><div class="grid-content bg-purple"></div></ln-col>
    <ln-col :span="2" :offset="2"><div class="grid-content bg-purple"></div></ln-col>
  </ln-row>
  <ln-row>
    <ln-col :span="2" :offset="4"><div class="grid-content bg-purple"></div></ln-col>
    <ln-col :span="2" :offset="2"><div class="grid-content bg-purple-light"></div></ln-col>
  </ln-row>
  <ln-row>
    <ln-col :span="8" :offset="2"><div class="grid-content bg-purple"></div></ln-col>
  </ln-row>
</div>
```
:::

### Row 属性
| Attribute | Description | Type | Accepted values | Default |
| --------- | ----------- | ---- | --------------- | ------- |
| gutter | 分栏间隔（px） | Number | — | 0 |

### Col 属性
| Attribute | Description | Type | Accepted values | Default |
| --------- | ----------- | ---- | --------------- | ------- |
| span | 分栏宽度 | Number | 1 - 12 | — |
| offset | 编译分栏数 | Number | 1 - 11 | — |