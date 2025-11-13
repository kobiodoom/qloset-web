import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

export default function TextToImage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Text to Image</h1>
        <p className="text-lg text-muted-foreground">
          Generate fashion designs from text descriptions
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Describe Your Design</CardTitle>
          <CardDescription>
            Provide a detailed description of the fashion image you want to create
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="E.g., A modern summer dress with floral patterns, soft pastel colors, flowing fabric, photographed on a model in natural lighting..."
            className="min-h-[150px] resize-none"
          />
          <div className="flex gap-3">
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              Generate Image
            </Button>
            <Button variant="outline">
              Use Example Prompt
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Style</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {["Realistic", "Artistic", "Minimalist", "Editorial"].map((style) => (
                <Button key={style} variant="outline" className="w-full justify-start" size="sm">
                  {style}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Aspect Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {["1:1 Square", "16:9 Wide", "9:16 Portrait", "4:3 Standard"].map((ratio) => (
                <Button key={ratio} variant="outline" className="w-full justify-start" size="sm">
                  {ratio}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Model</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {["Default", "High Detail", "Fast", "Creative"].map((model) => (
                <Button key={model} variant="outline" className="w-full justify-start" size="sm">
                  {model}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-muted/50">
        <CardHeader>
          <CardTitle>Generated Images</CardTitle>
          <CardDescription>Your creations will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border p-12 text-center">
            <div>
              <Sparkles className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No images generated yet. Describe your design to get started.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
