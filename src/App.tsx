import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LifestylePhotography from "./pages/LifestylePhotography";
import TextToImage from "./pages/TextToImage";
import ImageToFlatLay from "./pages/ImageToFlatLay";
import ImageToGhostMannequin from "./pages/ImageToGhostMannequin";
import ImageToTechPack from "./pages/ImageToTechPack";
import ImageTo3D from "./pages/ImageTo3D";
import ImageToVideo from "./pages/ImageToVideo";
import Settings from "./pages/Settings";
import FAQ from "./pages/FAQ";
import ToolPlaceholder from "./pages/ToolPlaceholder";
import NotFound from "./pages/NotFound";
import { Users, Eraser, Maximize2, ShoppingCart, Chrome, Smartphone } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/lifestyle-photography" element={<LifestylePhotography />} />
            <Route path="/text-to-image" element={<TextToImage />} />
            <Route path="/image-to-flat-lay" element={<ImageToFlatLay />} />
            <Route path="/image-to-ghost-mannequin" element={<ImageToGhostMannequin />} />
            <Route path="/image-to-tech-pack" element={<ImageToTechPack />} />
            <Route path="/image-to-3d" element={<ImageTo3D />} />
            <Route path="/image-to-video" element={<ImageToVideo />} />
            <Route
              path="/model-swap"
              element={
                <ToolPlaceholder
                  title="Model Swap"
                  description="Swap models while keeping the same product"
                  icon={Users}
                />
              }
            />
            <Route
              path="/background-remover"
              element={
                <ToolPlaceholder
                  title="Background Remover"
                  description="Remove backgrounds from your product images"
                  icon={Eraser}
                />
              }
            />
            <Route
              path="/smart-resize"
              element={
                <ToolPlaceholder
                  title="Smart Resize"
                  description="Intelligently resize images for different platforms"
                  icon={Maximize2}
                />
              }
            />
            <Route
              path="/upscaler"
              element={
                <ToolPlaceholder
                  title="Upscaler"
                  description="Enhance image resolution and quality using AI"
                  icon={Maximize2}
                />
              }
            />
            <Route
              path="/integrations/shopify"
              element={
                <ToolPlaceholder
                  title="Shopify Integration"
                  description="Connect Qloset with your Shopify store"
                  icon={ShoppingCart}
                />
              }
            />
            <Route
              path="/integrations/woocommerce"
              element={
                <ToolPlaceholder
                  title="WooCommerce Integration"
                  description="Connect Qloset with your WooCommerce store"
                  icon={ShoppingCart}
                />
              }
            />
            <Route
              path="/integrations/chrome"
              element={
                <ToolPlaceholder
                  title="Google Chrome Extension"
                  description="Use Qloset directly in your browser"
                  icon={Chrome}
                />
              }
            />
            <Route
              path="/integrations/mobile"
              element={
                <ToolPlaceholder
                  title="Mobile App"
                  description="Access Qloset on the go with our mobile app"
                  icon={Smartphone}
                />
              }
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
