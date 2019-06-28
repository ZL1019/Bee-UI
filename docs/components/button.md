---
title: 按钮
---

#### 基础用法

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

```html
<b-button>Default</b-button>
<b-button disabled>Disabled</b-button>
<b-button type="info" icon-name="search">Information</b-button>
<b-button type="success" icon-name="download">Success</b-button>
<b-button 
  type="primary" 
  icon-name="set" 
  icon-position="right"
  >Primary</b-button>
<b-button
  circle
  type="info"
  @click="download"
  icon-name="download"
  :loading="isLoading"
></b-button>
```
