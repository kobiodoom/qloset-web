import { NavLink } from "@/components/NavLink";
import {
  Home,
  Palette,
  Camera,
  FileText,
  Image,
  Shirt,
  FileCode,
  Box,
  Video,
  Users,
  Settings,
  Eraser,
  Maximize2,
  ShoppingCart,
  Chrome,
  Smartphone,
  HelpCircle,
  Crown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import qlosetLogo from "@/assets/qloset-logo.png";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Library", url: "/library", icon: Image },
];

const aiToolsItems = [
  { title: "Lifestyle Photography", url: "/lifestyle-photography", icon: Camera },
  { title: "Text to Image", url: "/text-to-image", icon: FileText },
  { title: "Image to Flat Lay", url: "/image-to-flat-lay", icon: Image },
  { title: "Image to Ghost Mannequin", url: "/image-to-ghost-mannequin", icon: Shirt },
  { title: "Image to Tech Pack", url: "/image-to-tech-pack", icon: FileCode },
  { title: "Image to 3D", url: "/image-to-3d", icon: Box },
  { title: "Image to Video", url: "/image-to-video", icon: Video },
  { title: "Model Swap", url: "/model-swap", icon: Users },
  { title: "Background Remover", url: "/background-remover", icon: Eraser },
  { title: "Smart Resize", url: "/smart-resize", icon: Maximize2 },
  { title: "Upscaler", url: "/upscaler", icon: Maximize2 },
];

const integrationsItems = [
  { title: "Shopify", url: "/integrations/shopify", icon: ShoppingCart },
  { title: "WooCommerce", url: "/integrations/woocommerce", icon: ShoppingCart },
  { title: "Google Chrome Extension", url: "/integrations/chrome", icon: Chrome },
  { title: "Mobile App", url: "/integrations/mobile", icon: Smartphone },
];

const faqItems = [
  { title: "FAQ", url: "/faq", icon: HelpCircle },
];

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-card">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-start pl-2">
          <img src={qlosetLogo} alt="Qloset" className="h-12 w-12 object-contain" />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Design Studio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiToolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Integrations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {integrationsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {faqItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-sidebar-border">
          <button className="w-full flex items-center justify-center gap-2 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg px-4 py-2.5 font-medium hover:bg-sidebar-primary/90 transition-colors">
            <Crown className="h-4 w-4" />
            {open && <span>Upgrade to Pro</span>}
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
