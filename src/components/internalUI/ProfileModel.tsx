import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Role</p>
            <p className="font-medium">{user.role}</p>
          </div>
          <Button variant="destructive" className="w-full">
            Logout
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
