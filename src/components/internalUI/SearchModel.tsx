import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SearchResultsModalProps {
  open: boolean;
  onClose: () => void;
  results: { id: number; name: string; type: string }[];
}

const SearchResultsModal: React.FC<SearchResultsModalProps> = ({ open, onClose, results }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Results</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-sm text-muted-foreground">No results found.</p>
          ) : (
            results.map((result) => (
              <div key={result.id} className="p-2 bg-muted rounded-lg">
                <p className="font-medium">{result.name}</p>
                <span className="text-xs text-muted-foreground">{result.type}</span>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsModal;
