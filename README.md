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

<pre class="overflow-visible!" data-start="962" data-end="1283"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary"><span><span>import</span><span></span><span> StorageSync</span><span></span><span> from</span><span></span><span> 'storagesync-js'</span><span>;

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
