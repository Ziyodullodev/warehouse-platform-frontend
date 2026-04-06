import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Low Stock Alert: Precision Pivot Bearing",
      message: "SKU MECH-55-P0 has reached critically low levels (0 items). Immediate restock required.",
      time: "2 minutes ago",
      type: "alert",
      icon: "warning",
      iconBg: "bg-error/10",
      iconColor: "text-error",
      unread: true,
    },
    {
      id: 2,
      title: "Inbound Delivery Received",
      message: "Shipment #8892 from GlobalTech Suppliers has been successfully scanned into Zone A.",
      time: "1 hour ago",
      type: "success",
      icon: "conveyor_belt",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      unread: true,
    },
    {
      id: 3,
      title: "System Update Scheduled",
      message: "Warehouse tracking system will undergo brief maintenance on Friday at 02:00 AM.",
      time: "5 hours ago",
      type: "info",
      icon: "info",
      iconBg: "bg-surface-container-high",
      iconColor: "text-on-surface-variant",
      unread: false,
    },
    {
      id: 4,
      title: "Monthly Inventory Report",
      message: "The automated valuation report for October has been generated and is ready for review.",
      time: "1 day ago",
      type: "document",
      icon: "description",
      iconBg: "bg-tertiary/10",
      iconColor: "text-tertiary",
      unread: false,
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="px-4 py-8 md:px-8 max-w-3xl w-full mx-auto md:ml-0">
      <div className="flex justify-between items-end mb-8 mt-2 md:mt-0">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-on-surface mb-1">Notifications</h1>
            {unreadCount > 0 && (
               <span className="px-2.5 py-0.5 rounded-full bg-primary text-white text-xs font-bold shadow-sm shadow-primary/20">
                 {unreadCount} New
               </span>
            )}
          </div>
          <p className="text-on-surface-variant text-sm mt-1">Updates, alerts, and system messages</p>
        </div>
        
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-xs font-semibold text-primary hover:text-primary-dim transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div 
              key={notification.id}
              onClick={() => markAsRead(notification.id)}
              className={`bg-surface-container-lowest rounded-2xl p-4 md:p-6 shadow-sm border transition-all cursor-pointer hover:shadow-md ${notification.unread ? 'border-primary/20 bg-primary/5' : 'border-transparent hover:border-surface-variant'}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${notification.iconBg}`}>
                  <span className={`material-symbols-outlined ${notification.iconColor}`}>
                    {notification.icon}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className={`text-base font-bold truncate ${notification.unread ? 'text-on-surface' : 'text-on-surface/80'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant shrink-0 whitespace-nowrap pt-1">
                      {notification.time}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 leading-relaxed ${notification.unread ? 'text-on-surface-variant' : 'text-outline'}`}>
                    {notification.message}
                  </p>
                </div>

                {/* Unread dot indicator */}
                {notification.unread && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2"></div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant/30">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">notifications_off</span>
            <h3 className="text-lg font-medium text-on-surface">You're all caught up!</h3>
            <p className="text-sm text-on-surface-variant mt-1">No new notifications right now.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
