import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
  notifications: { id: number; title: string; time: string }[];
}

const NotificationModal: React.FC<NotificationModalProps> = ({ open, onClose, notifications }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <p className="text-muted-foreground text-sm">No new notifications.</p>
          ) : (
            notifications.map((item) => (
              <div key={item.id} className="p-2 rounded-lg bg-muted">
                <p className="font-medium">{item.title}</p>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationModal;
