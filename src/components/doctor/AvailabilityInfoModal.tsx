
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

export const AvailabilityInfoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs flex items-center gap-1 px-0 py-0 h-auto">
          <Info className="h-3 w-3" /> 
          <span>Meer informatie</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Over beschikbaarheid van huisartsen</DialogTitle>
          <DialogDescription>
            Informatie over het beschikbaarheidssysteem
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            Veel huisartsenpraktijken in België hebben een patiëntenstop vanwege grote werkdruk. 
            MediLingua werkt samen met huisartsenkringen om realtime informatie te bieden over welke 
            artsen nog ruimte hebben voor nieuwe patiënten. Deze informatie wordt regelmatig bijgewerkt door de artsen zelf.
          </p>
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md">
            <h4 className="font-medium text-amber-800">Let op</h4>
            <p className="text-sm text-amber-700">
              Beschikbaarheid kan snel veranderen. We raden aan direct contact op te nemen met de praktijk 
              om de huidige status te bevestigen.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvailabilityInfoModal;
