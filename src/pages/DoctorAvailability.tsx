
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DoctorAvailability = () => {
  const { toast } = useToast();
  const [acceptingPatients, setAcceptingPatients] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Instellingen opgeslagen",
      description: "Uw beschikbaarheidsinstellingen zijn bijgewerkt.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pt-32 pb-12 bg-gradient-to-br from-sky-50 to-indigo-50">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent text-center">
          Beheer Beschikbaarheid
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Update hier uw beschikbaarheidsstatus voor nieuwe patiënten
        </p>

        <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Beschikbaarheidsinstellingen</CardTitle>
            <CardDescription>
              Configureer hier uw beschikbaarheid voor nieuwe patiënten en bijbehorende informatie.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="accepting-patients" className="text-base">
                    Accepteert momenteel nieuwe patiënten
                  </Label>
                  <Switch 
                    id="accepting-patients"
                    checked={acceptingPatients}
                    onCheckedChange={setAcceptingPatients}
                  />
                </div>
                {acceptingPatients && (
                  <div className="mt-4 border-l-2 border-green-300 pl-4">
                    <Label htmlFor="available-slots" className="text-sm font-medium">
                      Aantal beschikbare plekken
                    </Label>
                    <Input
                      id="available-slots"
                      type="number"
                      min={0}
                      value={availableSlots}
                      onChange={(e) => setAvailableSlots(parseInt(e.target.value) || 0)}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Geef aan hoeveel nieuwe patiënten u momenteel kunt accepteren.
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="temp-stop" className="text-base">
                  Tijdelijke stop
                </Label>
                <div className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="temp-stop"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Selecteer een einddatum voor tijdelijke stop</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-muted-foreground mt-1">
                    Selecteer een datum tot wanneer u geen nieuwe patiënten aanneemt (optioneel).
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-info" className="text-base">
                  Aanvullende informatie
                </Label>
                <Textarea
                  id="additional-info"
                  placeholder="Voeg hier aanvullende informatie toe over uw beschikbaarheid..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">
                  Specifieke voorwaarden of andere relevante informatie voor patiënten.
                </p>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-indigo-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Bezig met opslaan..." : "Instellingen opslaan"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default DoctorAvailability;
