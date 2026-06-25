export const safeStorage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error(`Storage get error for ${key}:`, e);
      return defaultValue;
    }
  },
 
  set: (key: string, value: unknown): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Storage set error for ${key}:`, e);
      return false;
    }
  },
 
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`Storage remove error for ${key}:`, e);
    }
  }
};
 
// Order helpers
export const saveOrder = (orderData: any) => {
  const orders = safeStorage.get<any[]>('guru_nanak_orders', []);
  orders.push(orderData);
  safeStorage.set('guru_nanak_orders', orders);
  safeStorage.set('guru_nanak_latest_order', orderData);
};
 
export const getOrders = () => safeStorage.get<any[]>('guru_nanak_orders', []);
 
export const saveNotification = (notification: any) => {
  const notifications = safeStorage.get<any[]>('guru_nanak_admin_notifications', []);
  notifications.push(notification);
  safeStorage.set('guru_nanak_admin_notifications', notifications);
};

export const getNotifications = () => 
  safeStorage.get<any[]>('guru_nanak_admin_notifications', []);
