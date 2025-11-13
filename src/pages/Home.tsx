import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Image, Shirt, Video } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const quickActions = [
    {
      title: "Text to Image",
      description: "Generate fashion images from text descriptions",
      icon: Sparkles,
      href: "/text-to-image",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      title: "Virtual Try-On",
      description: "See how products look on models",
      icon: Shirt,
      href: "/virtual-try-on",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "Image to Video",
      description: "Transform static images into dynamic videos",
      icon: Video,
      href: "/image-to-video",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      title: "Design Studio",
      description: "Access all creative tools in one place",
      icon: Image,
      href: "/design-studio",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  const recentActivity = [
    { name: "Summer Collection 2024", type: "Text to Image", date: "2 hours ago" },
    { name: "Model Try-On Project", type: "Virtual Try-On", date: "5 hours ago" },
    { name: "Product Animation", type: "Image to Video", date: "1 day ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to qloset</h1>
        <p className="text-lg text-muted-foreground">
          Your AI-powered fashion design platform
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Link key={action.title} to={action.href}>
            <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-border">
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${action.gradient}`}>
                  <action.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest projects and generations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>New to qloset? Here's how to begin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">Choose an AI Tool</p>
                  <p className="text-sm text-muted-foreground">
                    Select from our range of specialized AI fashion tools
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">Upload or Generate</p>
                  <p className="text-sm text-muted-foreground">
                    Upload your images or describe what you want to create
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">Download & Share</p>
                  <p className="text-sm text-muted-foreground">
                    Export your creations and share with your team
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Explore All AI Tools</CardTitle>
          <CardDescription>
            Discover the full range of AI-powered fashion design capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Virtual Try-On",
              "Text to Image",
              "Image to Flat Lay",
              "Ghost Mannequin",
              "Tech Pack",
              "Image to 3D",
              "Image to Video",
              "Image to GIF",
              "Model Swap",
            ].map((tool) => (
              <Button key={tool} variant="secondary" size="sm" className="rounded-full">
                {tool}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
