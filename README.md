# Write Doc

An environment to document.

## Instalation

Create a new proyect with **[react-create-app](https://reactjs.org/docs/create-a-new-react-app.html)**.

Run one of the following commands in your terminal:

```
npm install react-router-dom write-doc
```

Create a directory called **bookmarks** and file **index**.

**Typescript**

```ts
import { Bookmark } from "write-doc";

const bookmarks: Bookmark[] = [];

export default bookmarks;
```

**Javascript**

```js
import { Bookmark } from "write-doc";

const bookmarks = [];

export default bookmarks;
```

import **WriteDoc** and the **bookmarks** in your **index** app

```js
import { WriteDoc } from "write-doc";
import bookmarks from "./bookmarks";

root.render(
  <React.StrictMode>
    <WriteDoc bookmarks={bookmarks} />
  </React.StrictMode>
);
```

## Bookmarks

A bookmark is a set of pages that are part of a theme.

In the directory **bookmarks** you will create yours pages. Separate them by theme.

```
bookmarks
|- Theme1
|   |- index.js
|   |- MyNextPage.js
|   |- OtherPage.js
|- Theme2
|   |- index.ts
```

```jsx
import { Page } from "write-doc";

export default function Theme1() {
  return (
    <Page>
      <p>Hello word.</p>
    </Page>
  );
}
```

Import **Page** components for create your page.

## Routing

Creating bookmark

```js
import { bookmark, group } from "write-doc";
import Theme1 from "./Theme1";
import MyNextPage from "./Theme1/MyNextPage";
import OtherPage from "./Theme1/OtherPage.js";
import Theme2 from "./Theme2";

const bookmarks = [
  bookmark("Bookmark Name", "/base_path", [
    group("Category Name", {
      // path
      "/": {
        title: "Title",
        page: Theme1,
      },
      "/my_next_page": {
        title: "Title",
        page: MyNextPage,
      },
    }),
    group("Other Group Name", {
        "/other_page": {
          title: "Title",
          page: OtherPage,
        },
    }
  ]),
  bookmark("Other Bookmark", "/base_path_2", [
    group("Group Name", {
        "/": {
          title: "Title",
          page: Theme2,
        },
    }
  ]
  // other bookmarks...
];

export default bookmarks;
```

## Components

Only use html tags inside **Page** Component

```js
import { Page } from "write-doc";

export default function MyPage() {
  return (
    <Page>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint
        quaerat facere voluptates numquam cupiditate in. Dicta a, quis aliquid,
        officiis ipsam repudiandae, voluptatum eaque ducimus culpa numquam aut
        eligendi?
      </p>
      <h2>Sub title</h2>
      <p>Text...</p>
    </Page>
  );
}
```

---

Create your reports in [Github](https://github.com/ertrii/write-doc/issues)
