class StorageSync {
    constructor({ namespace = "", useSession = false, encrypt = false, secret = "" } = {}) {
      this.storage = useSession ? sessionStorage : localStorage;
      this.namespace = namespace;
      this.encrypt = encrypt;
      this.secret = secret;
    }
  
    _withNamespace(key) {
      return this.namespace ? `${this.namespace}:${key}` : key;
    }
  
    _encrypt(str) {
      if (!this.encrypt || !this.secret) return str;
      return btoa(unescape(encodeURIComponent(str + this.secret)));
    }
  
    _decrypt(str) {
      if (!this.encrypt || !this.secret) return str;
      const raw = decodeURIComponent(escape(atob(str)));
      return raw.replace(this.secret, "");
    }
  
    set(key, value, ttlInSeconds = null) {
      const payload = {
        value: this._encrypt(JSON.stringify(value)),
        expiry: ttlInSeconds ? Date.now() + ttlInSeconds * 1000 : null
      };
      this.storage.setItem(this._withNamespace(key), JSON.stringify(payload));
    }
  
    get(key) {
      const item = this.storage.getItem(this._withNamespace(key));
      if (!item) return null;
  
      try {
        const { value, expiry } = JSON.parse(item);
        if (expiry && Date.now() > expiry) {
          this.remove(key);
          return null;
        }
        return JSON.parse(this._decrypt(value));
      } catch (e) {
        return null;
      }
    }
  
    remove(key) {
      this.storage.removeItem(this._withNamespace(key));
    }
  
    clear() {
      const keysToRemove = [];
      for (let i = 0; i < this.storage.length; i++) {
        const key = this.storage.key(i);
        if (this.namespace === "" || key.startsWith(`${this.namespace}:`)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => this.storage.removeItem(key));
    }
  
    onChange(callback) {
      window.addEventListener("storage", (e) => {
        if (this.namespace && !e.key.startsWith(`${this.namespace}:`)) return;
        callback(e);
      });
    }
  }
  
  export default StorageSync;
  