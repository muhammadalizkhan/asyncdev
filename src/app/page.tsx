import PricingComponent from "./components/PricingComponent/PricingComponent";
import ServiceComponent from "./components/ServiceComponent/ServiceComponent";
import Hero from "./components/Hero/Hero";
import ScheduleCall from "./ScheduleCall/Page";
import EngagementModels from "./components/EngagementModels/EngagementModels";
import ExploreOurTech from "./components/ExploreOurTech/ExploreOurTech";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent/WhatMakesUsDifferent";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

export default function Page() {
  return (
    <>
      <Hero />
      <ServiceComponent />
      <ChooseUs />
      <WhatMakesUsDifferent />
      <WhoWeAre />
      {/* <EngagementModels />
      <ScheduleCall />
      <PricingComponent />
      <ExploreOurTech /> */}
    </>
  );
}
