# StorageSync.js

**StorageSync.js** is a lightweight JavaScript utility for synchronizing localStorage data across tabs and sessions — with namespacing, change detection, and intuitive API support.

> 📦 Easy to use.
> 🧠 Built for real-world use-cases.
> 💬 Keeps your app state in sync across tabs.

---

## 🚀 Installation

```bash
npm install storagesync-js
```


## 🧠 Why StorageSync?

Managing `localStorage` is easy — but syncing it across tabs with clean namespacing and change listeners is  **not** .

This package wraps native storage with powerful features:

* Namespaced key management
* Change detection with `.onChange()`
* Simple `.set()`, `.get()`, `.remove()`, and `.clear()` methods
* Zero dependencies

## 📦 Usage

<pre class="overflow-visible!" data-start="962" data-end="1283"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">js</div><div class="sticky top-9"><div class="absolute right-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-sidebar-surface-primary text-token-text-secondary dark:bg-token-main-surface-secondary flex items-center rounded-sm px-2 font-sans text-xs"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy</button></span><span class="" data-state="closed"><button class="flex items-center gap-1 px-4 py-1 select-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Edit</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>import</span><span></span><span>StorageSync</span><span></span><span>from</span><span></span><span>'storagesync-js'</span><span>;

</span><span>// Create a namespaced storage instance</span><span>
</span><span>const</span><span> store = </span><span>new</span><span></span><span>StorageSync</span><span>(</span><span>'app'</span><span>);

</span><span>// Set data</span><span>
store.</span><span>set</span><span>(</span><span>'token'</span><span>, </span><span>'abc123'</span><span>);

</span><span>// Get data</span><span>
</span><span>const</span><span> token = store.</span><span>get</span><span>(</span><span>'token'</span><span>);

</span><span>// Listen for changes across tabs</span><span>
store.</span><span>onChange</span><span>(</span><span>(e</span><span>) => {
  </span><span>console</span><span>.</span><span>log</span><span>(</span><span>'Storage changed:'</span><span>, e);
});</span></span></code></div></div></pre>



## 🧰 API Reference

### `new StorageSync(namespace: string)`

Creates a new instance with the given namespace. All keys will be stored as `namespace:key`.

---

### `.set(key: string, value: any)`

Stores a key-value pair in localStorage.

---

### `.get(key: string)`

Retrieves a value by key. Automatically parses JSON.

---

### `.remove(key: string)`

Removes a key from storage.

---

### `.clear()`

Clears **all** keys under the current namespace only (does not affect global localStorage).

---

### `.onChange(callback: Function)`

Fires a callback whenever localStorage changes in another tab or window for the current namespace.




## 🔐 Example Use-Cases

* Shared auth tokens across tabs
* Tab-specific session data
* Synced feature toggles or theme preferences
* Building offline-friendly apps

---

## 📄 License

This project is licensed under the [MIT License]().

---

## 🤝 Contributing

Pull requests, suggestions, and issues are welcome! If you find a bug or want a feature, feel free to open an issue or PR.



## ✨ Author

Created by **Alan Thomas** – a passionate full-stack developer.

Let’s connect on [GitHub](https://github.com/alanthomasdev "alanthomasdev")!
