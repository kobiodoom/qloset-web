import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolPlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ToolPlaceholder({ title, description, icon: Icon }: ToolPlaceholderProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>This feature is coming soon</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            We're working hard to bring you this powerful AI tool. Stay tuned for updates!
          </p>
          <Button>Get Notified When Available</Button>
        </CardContent>
      </Card>

      <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle>What to Expect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {title} will provide cutting-edge AI capabilities to transform your fashion design workflow.
            Join our waitlist to be the first to try it when it launches.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
