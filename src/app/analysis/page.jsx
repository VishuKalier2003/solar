import Header from "@/componentscopy/ui/Header";
import { TracingBeamDemo } from "@/container/codebase";
import Footer from "@/container/Footer";
import { HeroParallaxDemo } from "@/container/HeroParallax";
import { TypewriterEffectSmoothDemo } from "@/container/typewriterAnalysis";
import { TypewriterEffectSmoothDemo1 } from "@/container/typewriterAnalysisI";
import React from "react";

export default function Home() {
    return(
        <div>
            <Header />
            <TypewriterEffectSmoothDemo />
            <TracingBeamDemo />
            <TypewriterEffectSmoothDemo1 />
            <HeroParallaxDemo />
            <Footer />
        </div>
    )
}
